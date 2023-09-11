# `server.js`

## Função

Criar um servidor web que fornece uma API RESTful para gerenciar vídeos. Os dados dos vídeos são armazenados em um banco de dados PostgreSQL (ou em memória, dependendo da escolha do banco de dados). As rotas definidas permitem criar, listar, atualizar e excluir vídeos. O Fastify é usado como o framework para lidar com as solicitações HTTP.

## Análise do Código

1. Configuração do servidor Fastify:

   ```javascript
   const server = fastify()
   ```

   Um servidor Fastify é criado usando a função `fastify()`. Este servidor será usado para manipular as solicitações HTTP.

2. Configuração do banco de dados:

   ```javascript
   const database = new DatabasePostgres()
   ```

   Um objeto de banco de dados é criado com base na classe `DatabasePostgres`. Isso implica que o código está usando um banco de dados PostgreSQL para armazenar informações sobre vídeos. Você pode trocar isso por `DatabaseMemory` se preferir uma implementação em memória.

3. Definição das rotas da API:
   O código define quatro rotas principais para a API RESTful: POST, GET, PUT e DELETE para a entidade "videos".

   - Rota POST para criar um novo vídeo:

     ```javascript
     server.post('/videos', async (request, reply) => {
         // Extrai os dados do corpo da solicitação
         const { title, description, duration } = request.body

         // Chama o método 'create' do banco de dados para criar um novo vídeo
         await database.create({
             title,
             description,
             duration
         })

         // Retorna uma resposta de status 201 (Created)
         return reply.status(201).send()
     })
     ```

   - Rota GET para listar vídeos com uma opção de pesquisa:

     ```javascript
     server.get('/videos', async (request, reply) => {
         // Extrai o parâmetro de consulta 'search' da solicitação
         const search = request.query.search

         // Chama o método 'list' do banco de dados para obter vídeos com base na pesquisa
         const videos = await database.list(search)

         // Retorna os vídeos encontrados como resposta
         return videos
     })
     ```

   - Rota PUT para atualizar um vídeo existente:

     ```javascript
     server.put('/videos/:id', async (request, reply) => {
         // Extrai o ID do vídeo da solicitação
         const videoId = request.params.id
         const { title, description, duration } = request.body

         // Chama o método 'update' do banco de dados para atualizar o vídeo com o ID fornecido
         await database.update(videoId, {
             title,
             description,
             duration
         })

         // Retorna uma resposta de status 204 (No Content) após a atualização
         return reply.status(204).send()
     })
     ```

   - Rota DELETE para excluir um vídeo existente:

     ```javascript
     server.delete('/videos/:id', async (request, reply) => {
         // Extrai o ID do vídeo da solicitação
         const videoId = request.params.id

         // Chama o método 'delete' do banco de dados para excluir o vídeo com o ID fornecido
         await database.delete(videoId)

         // Retorna uma resposta de status 204 (No Content) após a exclusão
         return reply.status(204).send()
     })
     ```

4. Inicialização do servidor:

   ```javascript
   server.listen({
       host: '0.0.0.0',
       port: process.env.PORT ?? 3333,
   })
   ```

   O servidor Fastify é configurado para escutar em um determinado host e porta. Ele usa a porta definida na variável de ambiente `process.env.PORT` ou, se não estiver definida, a porta 3333.

> Voltar para o [index](../index.md).
