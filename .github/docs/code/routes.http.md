# `routes.http`

## Função

Definir operações CRUD (Create, Read, Update, Delete) em uma API de gerenciamento de vídeos. As requisições POST e PUT são usadas para criar e atualizar vídeos, a requisição GET é usada para listar vídeos e a requisição DELETE é usada para excluir um vídeo específico com base no UUID fornecido. O formato .http é uma maneira de documentar e testar requisições HTTP em um formato legível por humanos.

## Análise do Código

1. **POST Request para criar um vídeo**:

   ```http
   POST http://localhost:3333/videos
   Content-Type: application/json
   Accept-Language: pt-BR, en
   ```

   - **Método HTTP**: `POST`
   - **URL**: `http://localhost:3333/videos`
   - **Content-Type**: Indica que o corpo da solicitação contém dados em formato JSON.
   - **Accept-Language**: Define as preferências de idioma para a resposta da API (português brasileiro e inglês).

   **Corpo da solicitação JSON**:
   - Um JSON que contém informações sobre o vídeo que está sendo criado. Ele inclui um título, uma descrição e a duração do vídeo.

2. **GET Request para listar vídeos**:

   ```http
   GET http://localhost:3333/videos
   ```

   - **Método HTTP**: `GET`
   - **URL**: `http://localhost:3333/videos`

   Essa solicitação GET é usada para recuperar a lista de vídeos disponíveis no servidor.

3. **PUT Request para atualizar um vídeo**:

   ```http
   PUT http://localhost:3333/videos/789bc22e-48dc-4d9c-ba7e-d3756252222d
   Content-Type: application/json
   Accept-Language: pt-BR, en
   ```

   - **Método HTTP**: `PUT`
   - **URL**: `http://localhost:3333/videos/789bc22e-48dc-4d9c-ba7e-d3756252222d`
     - Neste caso, a URL inclui um identificador exclusivo (UUID) para o vídeo que está sendo atualizado.
   - **Content-Type**: Indica que o corpo da solicitação contém dados em formato JSON.
   - **Accept-Language**: Define as preferências de idioma para a resposta da API (português brasileiro e inglês).

   **Corpo da solicitação JSON**:
   - Um JSON que contém as informações atualizadas para o vídeo, incluindo título, descrição e duração.

4. **DELETE Request para excluir um vídeo**:

   ```http
   DELETE http://localhost:3333/videos/743aae13-a33f-44e2-bddf-cdc6025af367
   ```

   - **Método HTTP**: `DELETE`
   - **URL**: `http://localhost:3333/videos/743aae13-a33f-44e2-bddf-cdc6025af367`
     - A URL inclui o UUID do vídeo que será excluído.

   Essa solicitação DELETE é usada para excluir um vídeo específico do servidor.

> Voltar para o [index](../index.md).
