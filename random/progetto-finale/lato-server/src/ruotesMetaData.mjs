import fs from "node:fs/promises";
import axios from "axios";
import books from "../db/metadata/biblebooks.json" assert { type: "json" };
import versions from "../db/metadata/bibleversions.json" assert { type: "json" };
import indexCei2008 from "../db/metadata/index-version-Cei2008.json" assert { type: "json" };
import indexLuzzi from "../db/metadata/index-version-LUZZI.json" assert { type: "json" };

const biblebooks = "https://query.bibleget.io/metadata.php?query=biblebooks";
const bibleversions =
  "https://query.bibleget.io/metadata.php?query=bibleversions";
const versionIndexCEI =
  "https://query.bibleget.io/metadata.php?query=versionindex&versions=CEI2008"; // il secondo parametro della quesry vuole la versione, vedi quelle supportate in versions. // puo essere inpostato come variabile per differenziare le versioni richieste
const vesionIndexLuzzi =
  "https://query.bibleget.io/metadata.php?query=versionindex&versions=LUZZI";

export const getBooks = (req, res) => {
  try {
    res.status(200).send({
      message:
        "accedi ai libri con .data.result; accedi alle lingue con .data.languages",
      data: books,
      origins: biblebooks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      data: {},
      error: true,
      message: error.message,
    });
  }
};

export const getVersions = (req, res) => {
  try {
    res.status(200).send({
      message:
        'accedi alle versioni valide con .data."validversions; accedi si nome completi delle versioni con .data.validversions_fullname',
      data: versions,
      origins: bibleversions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      data: {},
      error: true,
      message: error.message,
    });
  }
};

export const getIndexVersion = (req, res) => {
  try {
    res.status(200).send({
      message: "controlla struttura dati, accedi Cei con .data.Cei; accedi LUZZI con .data.Luzzi",
      data: {
        Cei: indexCei2008,
        Luzzi: indexLuzzi,
      },
      origins: {
        Cei: versionIndexCEI,
        Luzzi: vesionIndexLuzzi,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      data: {},
      error: true,
      message: error.message,
    });
  }
};
