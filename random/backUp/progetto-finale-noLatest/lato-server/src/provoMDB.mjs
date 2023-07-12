// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGO_SECOND_URI;

// const client = new MongoClient(uri);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// export async function main() {
//     // we'll add code here soon
//     try {
//         await client.connect();

//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
//  }

let a = [{ verse: "1ms2,4", text: "lorem ipsum" }, {verse: "Mc,4", text: "lorem ipsum"}, {verse: "Lc,4,4", text: "lorem ipsum"}];
console.log(a);
let b = {verse: "Mc,4", text: "lorem ipsum"}

let c = a.filter((e)=> e.verse != b.verse)

console.log(c);

console.log(a.indexOf(b));

const array  = [
    {
        "verse": "Es2,5",
        "text": "Ora la figlia del faraone scese al Nilo per fare il bagno, mentre le sue ancelle passeggiavano lungo la sponda del Nilo. Ella vide il cestello fra i giunchi e mandò la sua schiava a prenderlo."
    },
    {
        "verse": "Es2,13",
        "text": "Il giorno dopo uscì di nuovo e vide due Ebrei che litigavano; disse a quello che aveva torto: \"Perché percuoti il tuo fratello?\"."
    }
]

const array2 = array.map((el)=> el.verse)
console.log(array2);