"use strict";
//Bolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//String 
var nome = 'Vitor Farias';
// Array
var idades = [23, 28, 45];
var idades2 = [23, 345, 456, 46];
//Tuple
var jogadores; //define o tipo 
jogadores = ['vitor', 88, 'Ciclano',];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["aprovado"] = "001";
    StatusAprovacao["pendente"] = "002";
    StatusAprovacao["rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.aprovado;
//Any
var retornoDaAPI = [123, 'vitor', false];
var retornoDaAPI2 = {};
//Void
function printarNaTela(msg) {
    console.log(msg);
}
// null e undefined
var u = undefined;
var n = null;
//object
function criar(objeto) {
}
criar({
    propriedade: 1,
});
criar('vitor'); // dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('algo falhou');
}
//Union Types
var nota = 5;
function exibirNota(nota) {
    console.log('A nota é ${nota}');
}
exibirNota('10');
exibirNota(10);
var funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contatos = {
    nome: nome,
    'vitor': ,
    telefone1: '12354984'
};
// Typer assertion
var minhaIdade = 23;
minhaIdade.toString();
//const input =  document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1"); //outra forma de fazer 
console.log(input.value);
// 
