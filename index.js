const express = require('express');
const app = express();

//Registra que estamos utilizando o JSON no Body 
//da requisição
app.use(express.json());

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

  //[GET] /herois ->Read All (Ler tudo)
  app.get("/herois", function (req, res) {
      res.send(herois.filter(Boolean));
  });

  //[GET] /herois/:id -> Read by ID (Ler pelo ID)
  app.get("/herois/:id", function(req, res){
    //Pegamos o ID pela rota I
    const id = req.params.id;

    //Acessar o registro na lista pelo ID
    const item = herois[id - 1];

    //Enviar o registro encontrando
    res.send(item);
  });
  
  //[POST] /herois -> Create (Criar)
  app.post("/herois", function (req, res) {
        //console.log(req.body);
    
    //Acessamos o valor que foi enviado na request
    const item = req.body.nome;

    //Insere valor na lista
    herois.push(item);

    //Exibe uma mensagem de sucesso
    res.send("Item criado com sucesso");
  });

  //[Delete]
  app.delete("/herois/:id", function(req, res){
    const id = req.params.id;
    delete herois[id - 1];
    res.send("Remover um item");
  });

  //[PUT] /herois/:id -> Update (Atualizar)
  app.put("/herois/:id", function (req, res) {
    const id = req.params.id;
    const item = req.body.nome;
    herois[id-1] = item;

    res.send("Atualizar o item");
  });

  app.listen(3000, function () {
    console.log("Aplicação rodando em http://localhost:3000");
});
