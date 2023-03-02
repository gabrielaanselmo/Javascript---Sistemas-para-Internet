//Var é global tanto que ela esteja declarada em um todo.
var aluno = "joão";
console.log(aluno)

//Aluno2 é uma variavel local porque ela está declarada em um canto só.
function teste (){
    var aluno2 = "pedro";
    console.log(aluno2);
}

//Let é um contexto de bloco: Bloco. Ele só funciona na chave de onde ele se encontra.

if (aluno=="João"){
    let resultado = "Olá João!";
    var resultado2 = "Olá Joãozinho!";
}
else{
    let resultado = "Olá Desconhecido!";
    var resultado2 = "Olá Desconhecido!";
}

console.log(resultado);