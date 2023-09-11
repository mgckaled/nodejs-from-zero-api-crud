# `db/database.memory.js`

## Função

A `DatabaseMemory` oferece funcionalidades básicas de CRUD (Create, Read, Update, Delete) para uma base de dados em memória que armazena vídeos. Os métodos `create`, `update` e `delete` permitem manipular os dados na base de dados, enquanto o método `list` permite listar os vídeos, opcionalmente filtrando-os por título. A propriedade `#videos` é usada internamente para armazenar os vídeos como pares chave-valor, onde a chave é o ID único do vídeo e o valor é o próprio vídeo.

## Análise do Código

1. **Importação da biblioteca crypto**:

   ```javascript
   import { randomUUID } from "crypto";
   ```

   - Este trecho de código importa a função `randomUUID` da biblioteca nativa "crypto" do Node.js. A função `randomUUID` é usada para gerar identificadores únicos universais (UUIDs).

2. **Declaração da classe `DatabaseMemory`**:

   ```javascript
   export class DatabaseMemory {
   ```

   - Isso declara uma classe chamada `DatabaseMemory`, que será exportada para que outras partes do código possam utilizá-la.

3. **Inicialização de propriedade privada `#videos`**:

   ```javascript
   #videos = new Map();
   ```

   - Aqui, a classe possui uma propriedade privada chamada `#videos`, que é inicializada como uma instância de um objeto `Map`. Essa propriedade é usada para armazenar os vídeos na base de dados em memória.

4. **Método `list(search)`**:

   ```javascript
   list(search) {
       // ...
   }
   ```

   - Este método é usado para listar os vídeos na base de dados. Ele aceita um parâmetro opcional `search` que permite filtrar os resultados com base no título do vídeo.

   - O método primeiro chama `Array.from(this.#videos.entries())` para obter uma matriz de entradas (pares chave-valor) do Map `#videos`.

   - Em seguida, ele mapeia essa matriz para criar um novo array contendo objetos de vídeo no formato `{ id, ...data }`. Cada objeto de vídeo contém a chave (ID) e os dados do vídeo.

   - Finalmente, ele filtra os resultados com base na pesquisa (se fornecida) para retornar apenas os vídeos cujos títulos incluem a pesquisa.

5. **Método `create(video)`**:

   ```javascript
   create(video) {
       // ...
   }
   ```

   - Este método é usado para criar um novo vídeo na base de dados em memória. Ele gera um UUID único para o vídeo e, em seguida, adiciona o vídeo ao Map `#videos` com a chave sendo o UUID gerado.

6. **Método `update(id, video)`**:

   ```javascript
   update(id, video) {
       // ...
   }
   ```

   - Este método é usado para atualizar um vídeo existente na base de dados em memória. Ele recebe o ID do vídeo que se deseja atualizar e os novos dados do vídeo. Em seguida, ele simplesmente substitui os dados do vídeo antigo pelos novos dados no Map `#videos`.

7. **Método `delete(id)`**:

   ```javascript
   delete(id) {
       // ...
   }
   ```

   - Este método é usado para excluir um vídeo da base de dados em memória. Ele recebe o ID do vídeo que se deseja excluir e, em seguida, usa o método `delete` para remover a entrada correspondente do Map `#videos`.

> Voltar para o [index](../../index.md).
