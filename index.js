const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});
// /oi -> "Olá, Mundo"
app.get('/oi', function (req, res) {
    res.send('Olá, Mundo!');
  });

  //endpoints de heróis

  const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
  //                0                   1               2

  //[GET] /heois
  app.get("/herois", function (req, res) {
      res.send(herois);
  });

  app.listen(3000, function () {
    console.log("Aplicação rodando em http://localhost:3000");
});
