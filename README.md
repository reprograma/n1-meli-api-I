### Protocolo HTTP (Hypertext Transfer Protocol)

É um protocolo de comunicação que permite que aplicações web se comuniquem, troquem informações e dados. __É o mensageiro da web__. 

O HTTP funciona como um protocolo de requisição-resposta entre cliente e servidor. 


#### Verbos/métodos (foco no GET) 

VERBOS | significado
------------ | -------------
__GET__| Obter os dados de um recurso.
POST |	Criar um novo recurso.
PUT	| Substituir os dados de um determinado recurso.
PATCH |	Atualizar parcialmente um determinado recurso.
DELETE | Excluir um determinado recurso.
HEAD | Similar ao GET, mas utilizado apenas para se obter os cabeçalhos de resposta, sem os dados em si.
OPTIONS	| Obter quais manipulações podem ser realizadas em um determinado recurso.

**Response**

Depois que o servidor processa uma requisição, ele precisa devolver uma resposta que geralmente vai estar em um formato que seu navegador consiga entender: HTML, XML ou JSON.

A Response também vem com o __Status Code__ que informa o que aconteceu com a requisição que você mandou.
Os status code são dividos em 5 classes (categorias ou famílias). O Primeiro digito do status define a classe da response. 

Status Code | Significado
------------ | -------------
100 | são apenas informativas.
200 | significa que a requisição foi bem sucedida
300 | querem te falar pra você fazer um redirecionamento, ou seja, uma segunda requisição
400 | significa que tem algum erro de sintaxe na requisição ou a requisção não pode ser completada. 
500 | aparentemente o servidor não conseguiu responder um request válido.  

lista de status code: https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP 

__Headers__: Cabeçalho da requisição/resposta

Um cabeçalho de requisição é um cabeçalho HTTP que pode ser utilizado em uma requisição HTTP, e não é relacionado ao conteúdo da mensagem.

__body__: corpo da requisição/resposta 

Não usa-se, normalmente, body nas requisições GET. Ele é mais útil em POSTs e PUTs,
Quando você envia os dados de um formulário de uma página HTML, por exemplo. 

__CORS__: Cross-Origin Resource Sharing. Por default uma aplicação JavaScript rodando no browser pode apenas acessar recursos HTTP do mesmo domínio (origin). 
Então se no backend não setarmos regras que permitam requests de outros domínios, a requisição vai falhar. 


### Criando um servidor com Node.js

#### Usando Express
Express é uma lib que facilita a criação de servidores HTTP
`npm install --save express`

```
const express = require('express')
const PORT = 8000

const application = express()

application.get('/', function (request, response) {
  console.log('URL:', request.url)
  console.log('Método:', request.method)
  response.status(200).send('Olá!')
}).listen(PORT)
```