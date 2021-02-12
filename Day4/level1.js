const myAge = 20

const yourAge = Number(prompt('Informe sua idade' , 'Insira sua idade aqui'))

if(myAge > yourAge){
  console.log('Voce eh '+ (myAge - yourAge) + ' anos mais novo que eu')
}
else{
  console.log('Voce eh '+ (yourAge - myAge) + ' anos mais velho que eu')
}

//----------------------------------------------------------------

let a=10
let b=100

if(a < b){
    console.log(`${b} eh um numero maior que ${a}`)
}
else{
    console.log(`${a} eh um numero maior que ${b}`)
}

a>b ? console.log(`${a} eh maior que ${b}`) : console.log(`${b} eh maior que ${a}`)

//----------------------------------------------------------------

function verificarParImpar(numero){
    if(numero%2 == 0){
        console.log(`${numero} é par`)
    }
    else{
        console.log(`${numero} é ímpar`)
    }
}

verificarParImpar(6)
verificarParImpar(3)
verificarParImpar(0)