import fs from "node:fs/promises";
import axios from "axios";

//import BOOKS from "../db/metadata/biblebooks.json" assert { type: 'json' }
import versions from "../db/metadata/bibleversions.json" assert { type: "json" };
import indexCei2008 from "../db/metadata/index-version-Cei2008.json" assert { type: "json" };

const books = indexCei2008.indexes.CEI2008.biblebooks;
const abbreviations = indexCei2008.indexes.CEI2008.abbreviations;
const chapterLimit = indexCei2008.indexes.CEI2008.chapter_limit;

const FILE_CHAPTER = "section-9";

// section-1 da 0 a 4
// section-2 da 5 a 12
// section-3 da 13 a 21
// section-4 da 22 a 24
// section-5 da 25 a 29
// section-6 da 30 a 45 (fine antico testamento)
// section-7 da 46 a 54
// section-8 da 55 a 62
// section-9 da 63 alla fine

//console.log(books);

function findFile(nameBook) {
  const index = books.indexOf(nameBook);
  if (index <= 4) {
    return "section-1";
  }
  if (index > 4 && index <= 12) {
    return "section-2";
  }
  if (index > 12 && index <= 21) {
    return "section-3";
  }
  if (index > 21 && index <= 24) {
    return "section-4";
  }
  if (index > 24 && index <= 29) {
    return "section-5";
  }
  if (index > 29 && index <= 45) {
    return "section-6";
  }
  if (index > 45 && index <= 54) {
    return "section-7";
  }
  if (index > 54 && index <= 62) {
    return "section-8";
  }
  if (index > 62 && index <= 72) {
    return "section-9";
  }
}

// una get dal client, che mi chiede un capitolo di un libro
export const getChapter = async (req, res) => {
  const bookRequest = req.params.book; // attenzione al nome del libro deve corrispondere anche nella maiuscola iniziale
  const chapterRequest = req.params.chapter;
  console.log(bookRequest);
  console.log(chapterRequest);
  //console.log(abbreviations);
  const indexRequest = books.indexOf(bookRequest); // verificare cosa succede con index of se il libro non esiste in array
  console.log(indexRequest);
  try {
    if (
      books.includes(bookRequest) &&
      chapterRequest <= chapterLimit[indexRequest]
    ) {
      const abbreviation = abbreviations[indexRequest];
      const section = findFile(bookRequest);

      const DB_PATH = `./db/chapters/${section}.json`;

      const data = await fs.readFile(DB_PATH);
      const chapters = JSON.parse(data.toString());
      const chapterToFind = abbreviation + chapterRequest;
      let chapter = chapters[bookRequest][chapterToFind];
      if (chapter.empty) {
        let response = await axios.get(
          `https://query.bibleget.io/v3/?query=${chapterToFind}&version=CEI2008` // vedere questione appid parametro
        );
        let newUpdate = response.data;
        chapters[bookRequest][chapterToFind].data = newUpdate;
        chapters[bookRequest][chapterToFind].empty = false;
        await fs.writeFile(DB_PATH, JSON.stringify(chapters, null, "  "));
        res
          .send({
            data: chapters[bookRequest][chapterToFind].data,
            message: "chapter created",
          })
          .status(200);
      } else {
        res
          .send({
            data: chapter.data,
            message: "chapter found",
          })
          .status(200);
      }
    } else {
      res.send({
        data: {},
        error: true,
        message: "book or chapter not found",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .send({
        data: {},
        error: true,
        message: "server problem",
      })
      .status(500); // controllare migliore codice di status
  }
};
