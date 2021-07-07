//FizzBuzz
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//divisivel por 3 e 5 => 'não é um numero'
//se não for divisivel nem por 3 nem por 5 => Entrada

let resultado = fizzBuzz(20);
console.log(resultado)


function fizzBuzz(entrada) {
    if(typeof entrada !== 'number')
    return'não é um numero';
    if((entrada % 3 == 0) && ( entrada % 5 === 0))
        return'Fizzbuzz'
    if (entrada % 3 == 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;

}