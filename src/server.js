//servidor
const express = require('express');
const server = express();

const { 
  pageLanding, 
  pageStudy, 
  pageGiveClasses 
} = require('./pages')


//Configurando o nunjucks( template engine )
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

//Configurando arquivos estáticos (css, scripts, imagens)
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500);