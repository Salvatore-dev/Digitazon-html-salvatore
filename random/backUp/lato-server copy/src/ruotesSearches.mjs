import fs from "node:fs/promises";
import axios from "axios";

import {
  insertKeyword,
  findKeyword,
  findChapter,
  insertChapters,
} from "./mongoDB.mjs";

import indexCei2008 from "../db/metadata/index-version-Cei2008.json" assert { type: "json" };

const books = indexCei2008.indexes.CEI2008.biblebooks;
const abbreviations = indexCei2008.indexes.CEI2008.abbreviations;
const chaptersLimit = indexCei2008.indexes.CEI2008.chapter_limit;
const verseLimit = indexCei2008.indexes.CEI2008.verse_limit;

export const getKeyword = async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const keyword = await findKeyword(query.keyword);
    //console.log(keyword);
    if (keyword) {
      res.status(200).send({
        data: keyword,
        message: "keyword founded",
      });
    } else {
      const response = await axios.post(
        `https://query.bibleget.io/v3/search.php`,
        {
          query: "keywordsearch",
          keyword: query.keyword,
          version: "CEI2008",
          appid: "italy", // valutare cosa inserire
        }
      ); // vedere questione appid parametro#
      const mySerach = response.data;
      const newKeyword = { ...query, ...mySerach };
      insertKeyword(newKeyword);

      res.status(201).send({
        data: newKeyword,
        message: "keyword created",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500) // vedi specificamente
      .send({
        data: {},
        error: true,
        message: "server problems",
      });
  }
};

export const getVerse = async (req, res) => {
  const query = req.params;
  //console.log(query);

  const bookRequest = query.book; // attenzione al nome del libro deve corrispondere anche nella maiuscola iniziale
  const chapterRequest = query.chapter; // deve essere un numero
  const verseRequest = query.verse; // deve essere un numero
  console.log(bookRequest);
  console.log(chapterRequest);
  //console.log(abbreviations);
  const indexRequest = books.indexOf(bookRequest); // verificare cosa succede con index of se il libro non esiste in array
  //console.log(indexRequest);
  const abbreviation = abbreviations[indexRequest];
  //console.log(abbreviation);
  const limitChapter = chaptersLimit[indexRequest];
  const limitVersesChapter = verseLimit[indexRequest][chapterRequest - 1];
  //console.log(limitVersesChapter);
  const chapterTofind = abbreviation + chapterRequest;
  try {
    if (
      indexRequest >= 0 &&
      chapterRequest <= limitChapter &&
      verseRequest <= limitVersesChapter
    ) {
      const chapter = await findChapter(chapterTofind);
      //console.log(keyword);
      if (chapter) {
        const result = chapter.results.filter((v) => v.verse == verseRequest); // confronto tra un numero e una stringa il terso uguale non funzionerebbe
        res.status(200).send({
          data: result,
          message: "chapter founded",
        });
      } else {
        const response = await axios.post(`https://query.bibleget.io/v3/`, {
          query: chapterTofind,
          version: "CEI2008",
          appid: "italy",
        }); // vedere questione appid parametro#
        const mySearch = response.data;
        console.log(mySearch);
        const chapter = { chapter: chapterTofind };
        const newChapter = { ...chapter, ...mySearch };
        insertChapters(newChapter);
        const result = newChapter.results.filter(
          (v) => v.verse == verseRequest
        ); // si confrontano un numero e una stringa il terzo uguale non funzionerebbe
        res.status(201).send({
          data: result,
          message: "chapter created",
        });
      }
    } else {
      res
        .status(200) // controllare codice da restituire
        .send({
          data: {},
          error: true,
          message: "invalid request",
        });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500) // vedi specificamente
      .send({
        data: {},
        error: true,
        message: "server problems",
      });
  }
};
