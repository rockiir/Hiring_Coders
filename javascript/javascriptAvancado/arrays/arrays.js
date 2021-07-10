const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

//acessar informações num array
console.log(alunasGama[3])

//operador spread

const alunasXp = [ ...alunasGama, "simara"]
console.log(alunasXp)

//metodos de iteração

alunasXp.map(aluna => console.log(aluna))

//filter
const numeros = [ 34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)


const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)

//reduce - reduz o array a um resultado de operação matemática.
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior,  valorAtual)=> {
    return valorAnterior + valorAtual
},5)
 console.log(soma)


