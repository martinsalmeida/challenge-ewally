<h1 align="center">
  <img  alt="LogoEwally" src = "https://user-images.githubusercontent.com/42298239/174226279-326f0e48-9f9c-4718-b045-5dcd9cdf359f.png"/>
  <br>
  CHALLENGE EWALLY
  <h3 align="center">API em NODEJS para validação de boletos. Desafio para a empresa EWally </h3>
  <br>
  <p>https://www.ewally.com.br/en/</p>
</h1>

## :rocket: Tecnologias

Projeto desenvolvido utilizando as seguintes tecnologias:

- Express
- NodeJS
- Docker

## :clipboard: O Desafio da Aplicação

A aplicação consulta linhas digitáveis de boleto de título bancário e pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida e possuindo valor e/ou data de vencimento ter o retorno desses dados.

O Desafio consistia em escrever um programa em Node.js que expõe uma API na qual é dada como entrada uma linha digitada de um boleto e que retorna:

- status: 200 para linha válida ou 400 para linha inválida;
- amount: O valor do boleto, se existir;
- expirationDate: A data de vencimento do boleto, se existir;
- barCode: Os 44 dígitos correspondentes ao código de barras desse boleto;

Foi utilizado apenas o método GET e o path deve ser configurado como "http://localhost:8080/boleto/xxxxxx".

## :information_source: Como utilizar a aplicação

Para clonar e rodar a aplicação, você precisará do [Git](https://git-scm.com), Node.js v16.16 ou superior + Npm v8.1 ou superior ou via Docker:

```bash
# Clone este repositório
$ git clone https://github.com/martinsalmeida/challenge-ewally.git

# Entre no repositório challenge-ewally e instale as dependências
$ cd challenge-ewally
$ npm install

# Para rodar o localmente:
$ npm run dev

# Para rodar através do Docker:
$ docker-compose up

# Acesse o endereço:
$ http://localhost:8080/boleto/<digite_o_número_do_boleto>

# Endpoints para teste:
$ http://localhost:8080/boleto/03399821679671010179920050201019289400000028103

$ http://localhost:8080/boleto/846300000011199901622027206100100000003106575412

$ http://localhost:8080/boleto/826400000012843201066217684997380242205000092168

```

Made with :blush: by Daniel Augusto
