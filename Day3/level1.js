//level 1!
let informacoes = {
    nome: 'Maria',
    sobrenome: 'Kohler',
    pais: 'Brasil',
    cidade: 'Joinville',
    idade: 19,
    ehCasado: false,
    ano: 2020
}

console.log(typeof informacoes.nome) //string
console.log(typeof informacoes.sobrenome) //string
console.log(typeof informacoes.pais) //string
console.log(typeof informacoes.cidade) //string
console.log(typeof informacoes.idade) //number
console.log(typeof informacoes.ehCasado) //boolean
console.log(typeof informacoes.ano) //number

console.log(typeof '10' == typeof 10) //false
console.log (parseInt('9.8') == 10) //false

console.log(9>8) //true
console.log('oi' == 'oi') //true
console.log(typeof 1 == typeof 0) //true

console.log('oi' == Number) //false
console.log(9<8) //false
console.log('3' === 2) //false

let python = 'python'
let jargon = 'jargon'

console.log (python.length != jargon.length) //false

let dragon = 'dragon'

console.log(!(python.includes('on') && dragon.includes('on')))

const data =new Date()
console.log(data.getFullYear(),data.getMonth(), data.getDate())
console.log(data.getDay(),data.getHours(),data.getMinutes())

const newseconds = Date.now()
console.log(newseconds)