//Bolean
const contaPaga:boolean = false;

//Number
const idade: number =23;
const avaliacao: number = 4.5;

//String 
const nome: string = 'Vitor Farias';

// Array
const idades: [number] = [23, 28, 45];
const idades2: array<number> = [23, 345, 456, 46];

//Tuple
let jogadores: [string, number, string];//define o tipo 
jogadores = [ 'vitor', 88, 'Ciclano',]; 

//Enum
enum StatusAprovacao {
    aprovado = '001',
    pendente = '002',
    rejeitado = '003'
}
const statusDaAprovacao: statusAprovacao = StatusAprovacao.aprovado;

//Any
const retornoDaAPI: any = [ 123,  'vitor', false];
const retornoDaAPI2: any = { 

};

//Void
function printarNaTela (msg: string):void {
    console.log(msg);

}


// null e undefined

const u: undefined = undefined;
const n: null = null;

//object
function criar(objeto: object) {

}
criar({
    propriedade: 1,

})
criar('vitor') // dá erro

// Never
function loopInfinito() {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(){
    return erro ('algo falhou');
}

//Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string ){
    console.log('A nota é ${nota}');
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;

}
type Funcionarios = Array<string> | number | boolean;
const funcionarios: Funcionarios = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionarios[]){
for (let funcionario of funcionarios){
    console.log('Nome do funcionario', funcionario.nome);

}
}

let altura = 1.6;
altura = null;


type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string | null;

}

const contatos: contato = {
    nome 'vitor',
    telefone1: '12354984'
}

// Typer assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString();

//const input =  document.getElementById("numero1") as HTMLInputElement;
const input =   <HTMLInputElement> document.getElementById("numero1"); //outra forma de fazer 
console.log(input.value);

// 






