const challenge = '30 Days Of Javascript'

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(3,30))

console.log(challenge.substr(0,3))

console.log(challenge.includes('Script'))

console.log(challenge.split())
const replace = challenge.split("script")
console.log(replace)

const redes = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(redes.split(','))

console.log(challenge.replace('Javascript', 'Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))

const frase = "You cannot end a sentence with because because because is a conjunction"
console.log(frase.lastIndexOf("because"))

console.log(frase.search('because'))

const string = '30 Days Of JavaScript'
console.log(string.trim())
console.log(string.startsWith(''))
console.log(string.endsWith(''))
console.log(string.match('a'))

const phrase = '30 Days Of '
const phrase2 = 'Javascript'

console.log(phrase.concat(phrase2))

console.log(challenge.repeat(2))

//leve 2!

console.log('The quote \"There is no exercise better for the heart than reaching down and lifting people up\" by John Holmes teaches us to \help\ people')

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"' )

//--------------------------------

function number (num){
    if (typeof num === 10){
        return true
    }
    else{
        return num = Number(num)
    }
}

console.log(typeof number('10'))

const nomes = ['python', 'jargon']
console.log(nomes[0].includes('on'))
console.log(nomes[1].includes('on'))

const parcial = parseFloat('9.8')
console.log(parcial == 10)

const jargon = 'Hope this course is not full jargon'
console.log(jargon.includes('jargon'))

console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 256))

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\t')

console.log(frase.substr(0,30))

//level 3!
const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
console.log(love.match('love'))

console.log(frase.match('because'))

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let separador = /\W/;
let limpar = sentence.replace(/@/g,'').replace(/%/g,'').replace(/#/g,'').replace(/&/g,'').replace(/\$/g,'')
// let tirarPorcentagem = tirarArroba.replace(/%/g,'')
// let tirarCerquilha = tirarPorcentagem.replace(/#/g,'')
console.log(limpar)

var wordCounts = { };
var words = limpar.split(/\b/);

for(var i = 0; i < words.length; i++)
    wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;

console.log(wordCounts)

let salary = 5000
let annualIncome = 10000
let onlineCourses = 15000
console.log(`He earns ${salary} euro from salary per month, ${annualIncome} euro annual bonus, and ${onlineCourses} euro online courses per month.`)