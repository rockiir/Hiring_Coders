const  pessoa = {
    nome: "Simara", 
    idade: 32,
    cidade: "são paulo"

}

//notação de ponto
console.log(pessoa.nome)

//notação de colchetes
console.log (pessoa['idade'])


//como desestruturar objetos
const {nome, idade, cidade} = pessoa
//ou
console.log (nome)
console.log (idade)
console.log (cidade)


