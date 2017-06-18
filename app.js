var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var fetch = require('node-fetch');
var _apikey = "RGAPI-0e51f2ee-02fc-469f-86a3-0fd5bfaac865"
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/champions', async (req,res) => {
  try{
    let raw = await fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=image&tags=tags&dataById=false&api_key=' + _apikey, { headers:{'Access-Control-Allow-Origin':'*' }}),
        list = await raw.json();

    res.json({
      list: list
    })

  }catch(err){
    console.log(err);
    res.status(500).json({error: true, data: {message: err.message}});
  };
});

app.get('/champions/:id', async (req,res) => {
  try{
    let raw = await fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions/' + req.params.id +'?locale=en_US&tags=image&tags=info&tags=lore&tags=passive&tags=skins&tags=spells&tags=tags&api_key=' + _apikey, { headers:{'Access-Control-Allow-Origin':'*' }}),
        content = await raw.json();

    res.json({
      content: content
    })

  }catch(err){
    console.log(err);
    res.status(500).json({error: true, data: {message: err.message}});
  };
});

app.listen(8080);
