# `db/database-postgres.js`

## Função

A classe `DatabasePostgres` fornece métodos para listar, criar, atualizar e excluir vídeos em um banco de dados PostgreSQL. Esses métodos usam consultas SQL parametrizadas para interagir com o banco de dados e manipular os dados dos vídeos. A classe depende do módulo `sql` para executar as consultas SQL. Reparar no uso de `template literals`.

## Análise do Código

1. Importações:

   ```javascript
   import { randomUUID } from "crypto";
   import sql from './db.js'
   ```

   - O código começa importando a função `randomUUID` do módulo "crypto", que é usada para gerar um identificador único universal (UUID).
   - Também importa um módulo chamado `sql` de um arquivo chamado "db.js". Este módulo `sql` é responsável por criar consultas SQL parametrizadas e executá-las no banco de dados PostgreSQL.

2. Classe `DatabasePostgres`:

   ```javascript
   export class DatabasePostgres {
   ```

   - Define uma classe chamada `DatabasePostgres` que será usada para interagir com o banco de dados PostgreSQL.

3. Método `list(search)`:

   ```javascript
   async list(search) {
       let videos

       if (search) {
           video = await sql`
               select * from videos where title ilike '%${search}%'
           `
           return videos
       }

       videos = await sql`
           select * from videos
       `
       return videos
   }
   ```

   - Este método é usado para listar vídeos do banco de dados.
   - Aceita um parâmetro `search`, que é usado para filtrar os vídeos com base no título (caso seja fornecido).
   - Se `search` for fornecido, ele executa uma consulta SQL que seleciona todos os vídeos cujo título corresponde parcialmente ao valor de `search` (usando o operador `ilike` para pesquisa insensível a maiúsculas e minúsculas).
   - Se `search` não for fornecido, ele executa uma consulta SQL que seleciona todos os vídeos sem qualquer filtro.
   - As consultas SQL são executadas usando a função `sql` importada, e os resultados são armazenados na variável `videos`.

4. Método `create(video)`:

   ```javascript
   async create(video) {
       const videoId = randomUUID()

       const { title, description, duration } = video

       await sql`
           insert into videos (id, title, description, duration)
           values (${videoId}, ${title}, ${description}, ${duration})
       `
   }
   ```

   - Este método é usado para criar um novo vídeo no banco de dados.
   - Gera um novo UUID para o vídeo usando `randomUUID()`.
   - Extrai as propriedades `title`, `description` e `duration` do objeto `video`.
   - Executa uma consulta SQL de inserção para adicionar o novo vídeo à tabela `videos` no banco de dados.

5. Método `update(id, video)`:

   ```javascript
   async update(id, video) {
       const { title, description, duration } = video

       await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
   }
   ```

   - Este método é usado para atualizar as informações de um vídeo existente no banco de dados com base no seu ID.
   - Extrai as propriedades `title`, `description` e `duration` do objeto `video`.
   - Executa uma consulta SQL de atualização que modifica as informações do vídeo na tabela `videos` com base no ID fornecido.

6. Método `delete(id)`:

   ```javascript
   async delete(id) {
       await sql`delete from videos where id = ${id}`
   }
   ```

   - Este método é usado para excluir um vídeo do banco de dados com base no seu ID.
   - Executa uma consulta SQL de exclusão que remove o vídeo da tabela `videos` com base no ID fornecido.

> Voltar para o [index](../../index.md).
