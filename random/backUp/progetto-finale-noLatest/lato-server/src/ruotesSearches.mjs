import fs from "node:fs/promises";
import axios from "axios";

import {
  insertKeyword,
  findKeyword,
  findChapter,
  insertChapters,
} from "./mongoDB.mjs";

import Luzzi from "../db/metadata/index-version-LUZZI.json" assert { type: "json" };
import CEI2008 from "../db/metadata/index-version-Cei2008.json" assert { type: "json" };

const books = CEI2008.indexes.CEI2008.biblebooks;
const abbreviations = CEI2008.indexes.CEI2008.abbreviations;
const chaptersLimit = CEI2008.indexes.CEI2008.chapter_limit;
const verseLimit = CEI2008.indexes.CEI2008.verse_limit;

export const getKeyword = async (req, res) => {
  const query = req.query;
  //console.log(query);
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
          appid: "salvatore.tosich.dev@gmail.com",
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

  function controlRequest(str) {
    const regex = /^(\d+)(?:-(\d+))?$/;
    const match = str.match(regex);

    if (match) {
      const verse1 = parseInt(match[1], 10); // non serve il parse
      const verse2 = parseInt(match[2], 10);

      if (verse2) {
        return [verse1, verse2];
      } else {
        return verse1;
      }
    } else {
      return null;
    }
  }
  const bookRequest = query.book; // attenzione al nome del libro deve corrispondere anche nella maiuscola iniziale
  const chapterRequest = query.chapter; // deve essere un numero
  let verseRequest = NaN; // deve essere un numero // non accetta richieste di versetti multipli come 2-3
  const dataVerse = controlRequest(query.verse);
  let verse1 = null;
  let verse2 = null;
  if (Array.isArray(dataVerse)) {
    if (dataVerse[0] < dataVerse[1]) {
      verseRequest = dataVerse[1];
      verse1 = dataVerse[0];
      verse2 = dataVerse[1];
    } else {
      res
        .status(200) // controllare codice da restituire
        .send({
          data: {},
          error: true,
          message: "invalid request",
        })
        .end();
      return;
    }
  } else {
    if (!dataVerse) {
      res
        .status(200) // controllare codice da restituire
        .send({
          data: {},
          error: true,
          message: "invalid request",
        })
        .end();
      return;
    } else {
      verseRequest = dataVerse;
    }
  }
  //console.log(bookRequest);
  //console.log(chapterRequest);
  //console.log(abbreviations);

  let versionMetaData = "3";
  let checkEster = false;
  if (bookRequest == "Ester") {
    versionMetaData = "1";
    checkEster = true;
  }
  const indexRequest = books.indexOf(bookRequest); // verificare cosa succede con index of se il libro non esiste in array
  //console.log(indexRequest);

  let abbreviation = "";
  let limitChapter = "";
  let limitVersesChapter = "";

  if (indexRequest >= 0) {
    abbreviation = abbreviations[indexRequest];
    //console.log(abbreviation);
    limitChapter = chaptersLimit[indexRequest];
    limitVersesChapter = verseLimit[indexRequest][chapterRequest - 1];
  }

  //console.log(limitVersesChapter);

  try {
    if (
      indexRequest >= 0 &&
      chapterRequest <= limitChapter &&
      verseRequest <= limitVersesChapter
    ) {
      const chapterTofind = abbreviation + chapterRequest;
      const chapter = await findChapter(chapterTofind);
      //console.log(chapter);

      if (chapter) {
        let result = false;
        if (verse1 || verse2) {
          result = chapter.results.filter(
            (v) => v.verse >= verse1 && v.verse <= verse2
          );
        } else {
          result = chapter.results.filter((v) => v.verse == verseRequest);
        } // confronto tra un numero e una stringa il terso uguale non funzionerebbe
        res.status(200).send({
          data: result,
          message: "chapter founded",
        });
      } else {
        let response = false;
        if (checkEster) {
          response = await axios.get(
            `https://query.bibleget.io/v${versionMetaData}/?query=${chapterTofind}&version=CEI2008` // vedere questione appid parametro
          );
        } else {
          response = await axios.post(
            `https://query.bibleget.io/v${versionMetaData}/`,
            {
              query: chapterTofind,
              version: "CEI2008",
              appid: "salvatore.tosich.dev@gmail.com",
            }
          ); // vedere questione appid parametro#
        }

        const mySearch = response.data;
        //console.log(mySearch);
        const chapter = { chapter: chapterTofind };
        const newChapter = { ...chapter, ...mySearch };
        insertChapters(newChapter);
        let result = null;
        if (verse1 || verse2) {
          result = newChapter.results.filter(
            (v) => v.verse >= verse1 && v.verse <= verse2
          );
        } else {
          result = newChapter.results.filter((v) => v.verse == verseRequest); // si confrontano un numero e una stringa il terzo uguale non funzionerebbe
        }
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
          message: "invalid request, sono qui",
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
