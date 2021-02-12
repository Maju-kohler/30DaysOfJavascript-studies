// let base = prompt('Insira a base');
// let altura = prompt('Insira a altura');
// let calculo = 0.5 * base * altura;
// console.log(`A area do triangulo eh ${calculo}`)

//----------------------------------------------------------------

// let valor1 = prompt('Insira o valor A');
// let valor2 = prompt('Insira o valor B');
// let valor3 = prompt('Insira o valor C');

// let calculo = Number(valor1)+Number(valor2)+Number(valor3)

// console.log("O perimetro do triangulo eh " + calculo)

//----------------------------------------------------------------

// let length =Number(prompt("Insira a altura"))
// let width = Number(prompt("Insira a largura"))

// let area = length + width
// let perimeter = 2 * area

// console.log(`A area eh ${area} e o seu perimetro eh ${perimeter}`)

//----------------------------------------------------------------
// function calcular (x) {
//    let calculo = (Math.pow(x,2)) + (6*x) + 9;
//    return calculo
// }

// console.log(calcular(-3)) // 0

// ----------------------------------------------------------------
// let horas = Number(prompt('Insira as horas trabalhadas'))
// let dinheiro = Number(prompt('Insira os ganhos por hora'))

// let calculo = horas * dinheiro

// console.log(`Se voce trabalhou ${horas} horas por ${dinheiro} reais/hora, seu ganho foi de R$${calculo}`)

//----------------------------------------------------------------
// let myAge = 250
// let yourAge = 25

// console.log('Eu sou ' + (myAge-yourAge) + ' anos mais velho que você')

//----------------------------------------------------------------
// ano = Number(prompt('Em que ano você nasceu?', 'Insira o ano aqui'))

// let anoAtual = new Date(); 
// let idade = (anoAtual.getFullYear() - ano)

// if(idade >=18){
//   console.log("Maior de idade, pode dirigir")
// }
// else{
//   let aindaFalta = 18 - idade
//   console.log(`Menor de idade, ainda falta ${aindaFalta} anos para poder dirigir`)
// }

//----------------------------------------------------------------
// idade = Number(prompt("Insira os anos que voce ja viveu"))
// segundos = idade * 31536000

// console.log(`Você ja viveu ${segundos}`)

//----------------------------------------------------------------
let data = new Date();

console.log(`${data.getFullYear()}-${data.getMonth()}-${data.getDate()} ${data.getHours()}:${data.getMinutes()} `)
console.log(`${data.getDate()}-${data.getMonth()}-${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} `)
console.log(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} `)
