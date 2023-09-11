# `db/create-table.js`

## Função

Este código importa uma biblioteca 'sql' de um módulo externo, cria uma tabela chamada 'videos' em um banco de dados usando uma consulta SQL e exibe uma mensagem no console quando a tabela é criada com sucesso.

## Análise do Código

1. Importação da biblioteca 'sql':

```javascript
import sql from './db.js'
```

Nesta parte, o código está importando uma função ou objeto chamado 'sql' de um módulo externo chamado 'db.js'. contém funcionalidades relacionadas ao acesso a um banco de dados, como a execução de consultas SQL.

2. Criação da tabela 'videos':

```javascript
sql`
    CREATE TABLE videos (
        ID TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Tabela criada')
})
```

Nesta parte, uma consulta SQL é definida dentro de um template literal (``) e passada para a função 'sql'. A consulta SQL é usada para criar uma tabela chamada 'videos' com quatro colunas: 'ID' do tipo TEXT (texto), 'title' do tipo TEXT, 'description' do tipo TEXT e 'duration' do tipo INTEGER (inteiro). A coluna 'ID' é definida como a chave primária da tabela.

Após a definição da tabela, um manipulador de promessa (`.then()`) é encadeado para lidar com o resultado da criação da tabela. Quando a operação for concluída com sucesso, a mensagem "Tabela criada" será exibida no console.

> Voltar para o [index](../../index.md).
