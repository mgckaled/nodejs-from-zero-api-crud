import sql from "./db.js"

// sql`drop table if exists videos;`.then(() => console.log('tabela deletada'))

sql`
    CREATE TABLE videos (
        ID TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
  console.log("Tabela criada")
})
