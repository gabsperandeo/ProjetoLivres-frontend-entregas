const api = require('./api')
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const http = require('http')
const cadastro = require("./routes/cadastro")
const login = require("./routes/login")
const request = require('request')

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '../livres-entregas-fe/views/pages', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  /*app.use("/cadastro", cadastro)
  app.use("/login", login)

  app.get('/pokemon', async(req, res) => {
    try{
      const {data} = await api.get('pokemon/1')
      return res.send({name: data.name})
    } catch(error){
      res.send({error: error.message})
    }
  })

http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/html'});
})*/