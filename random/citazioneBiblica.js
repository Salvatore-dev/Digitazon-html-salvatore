const request = '2Sam2,5-6'
const verse = request.split(',')[1]
const chapter = request.split(',')[0]
console.log(chapter);
console.log(verse);

const regex = /^(\d?[A-Za-z]+)(\d+)$/; // /^(\d?[A-Za-z]+)(\d+)$/
const match = chapter.match(regex);

if (match) {
  const book = match[1]; // Abbreviazione del libro
  const chapter = parseInt(match[2], 10); // Numero del capitolo

  console.log('Abbreviazione del libro:', book);
  console.log('Numero del capitolo:', chapter);
} else {
  console.log('Formato della stringa non valido');
}

