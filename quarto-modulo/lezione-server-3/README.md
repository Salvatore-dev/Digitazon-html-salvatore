
consiglio di alberto: modificare in questo modo il contenuto del packjson per non far ricaricare il server per tutte le modifiche ma solo quelle inserite in src e non dunque anche le modifiche del db
"dev": "nodemon -w src src/index.js"