import fs from 'node:fs/promises'
import axios from "axios"

import books from "../db/metadata/biblebooks.json" assert { type: 'json' }
import versions from "../db/metadata/bibleversions.json" assert { type: 'json' }
import indexCei2008 from "../db/metadata/index-version-Cei2008.json" assert { type: 'json' }

import oldTestament from "../db/OldTestament-chapter.json" assert { type: 'json' }
import newTestament from "../db/NewTestament-chapter.json" assert { type: 'json' }

// una post dal client, che dati mi servono? 
export const getChapters = async (req, res) = {

}

