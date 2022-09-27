const url = require("url");
const fetch = require("node-fetch");
var Usuarios = require("../model/Usuarios");
var ReceitasFav = require("../model/ReceitasFavs");
Usuarios.hasMany(ReceitasFav, {
    foreignKey: "usuarioId"
});
ReceitasFav.belongsTo(Usuarios);


exports.buscarReceita= async function(req, res){
    console.log('buscar receita por culinaria')
    var culinaria = req.params.culinaria;
    var key = 'bd419cfba965467ba226f596ff8a6ea5';

    const url_api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${culinaria}&number=3`;
    const resposta = await fetch(url_api);
    const jsonResposta = await  resposta.json();

    console.log(jsonResposta);
    res.json(jsonResposta);

}

exports.cadastrarReceita= async function (req, res){
    console.log("cadastrar receita");

    var titulo = req.body.titulo
    var imagem = req.body.imagem
    var usuarioId = req.body.usuarioId

    ReceitasFav = await ReceitasFav.create({
        titulo: titulo,
        imagem: imagem,
        usuarioId: usuarioId
    }).then(function(res1) {
        res.send(res1); 
    }).catch(function (res2) {
        res.send(res2);
    });
}

exports.listarReceitas = async function(req, res) {
    console.log('listar receitas');
    const resultado = await ReceitasFav.findAll({
        where:{
            usuarioId: 1
        }
    })

    console.log(resultado);
    res.send(resultado);
};

exports.deletarReceita = async function (req, res){
    const receitaId = req.body.receitaId;

    const resultado = await ReceitasFav.findOne({
        where:{
            id: receitaId
        }
    })

    if(resultado != null){
        await resultado.destroy();
    }else{
        console.log("nao ha receita com esse id");
    }

    res.send(resultado);
}