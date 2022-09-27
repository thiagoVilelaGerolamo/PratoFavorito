(async ()=> {
    const banco = require("./conexao");
    const Usuarios = require("../model/usuarios");
    const ReceitasFav = require("../model/receitasFavs");

    try{
        const resultado = await banco.sync();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
})();