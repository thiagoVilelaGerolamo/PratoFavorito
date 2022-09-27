const express = require("express");

const usuariosController = require("./controller/UsuariosController");
const receitaController = require("./controller/ReceitasFavController");

var app = express();
const porta = 8000;
app.use(express.urlencoded({extended: false}));
app.use(express.json());

var i18n = require("i18n");
i18n.configure({
     directory: "./locais",
     extension: ".json",
     defaultLocale: "pt-BR",
     locales: ["pt-BR", "en"],
     cookie: "lang"
 });
app.use( i18n.init );

app.post("/cadastro", usuariosController.cadastrarUsuarios); 
app.post("/autenticacao", usuariosController.autenticarUsuario); 
app.get("/buscaReceita/:culinaria", receitaController.buscarReceita);
app.post("/cadastraReceita", receitaController.cadastrarReceita);
app.get("/listaReceita", receitaController.listarReceitas);
app.delete("/deleteReceita", receitaController.deletarReceita);

app.listen(porta, () => {
     console.log(`porta ${porta}`);
})
