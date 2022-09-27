const Usuarios = require("../model/usuarios");


exports.cadastrarUsuarios = async function(req, res) {
    console.log('cadastrar usuario')
    var email = req.body.email
    var senha = req.body.senha

    const resultado = await Usuarios.create({
        email: email,
        senha: senha
    }).then(function(res1) {
        res.send(res1); 
    }).catch(function (res2) {
        res.send(res2);
    });
};


exports.autenticarUsuario = async function(req, res) {
    console.log('autenticar usuario')
    var email = req.body.email
    var senha = req.body.senha

    const resultado = await Usuarios.findOne({
        where:{
            email: email,
            senha: senha
        }
    }).then(function(usuarioLogado) {
        res.send(usuarioLogado)
    }).catch(function (usuarioNaoLogado) {
        res.send(usuarioNaoLogado)
    });
};
