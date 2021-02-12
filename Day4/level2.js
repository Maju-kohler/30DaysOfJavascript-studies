function darNotas (nota){

        if (nota >= 80){
            return console.log('Nota A') 
        }
        else if (nota <=79 && nota >=70){
            return console.log('Nota B')
        }
        else if (nota <=69 && nota>=60){
            return console.log('Nota C')
        }
        else if (nota <=59 && nota>=50){
            return console.log('Nota D')
        }
        else if (nota <=49){
            return console.log('Nota F')
        }
}

darNotas(85)
darNotas(75)
darNotas(65)
darNotas(55)
darNotas(45)

//-------------------------------------------------------------

function estacoesDoAno (mes){
    switch (true) {
        case (mes == 'Setembro'|| mes == 'Outubro' || mes == 'Novembro'):
            console.log('Primavera')
            break;
        case (mes == 'Dezembro'|| mes == 'Janeiro' || mes == 'Fevereiro'):
            console.log('Verao')
            break;
        case (mes == 'Marco'|| mes == 'Abril' || mes == 'Maio'):
            console.log('Outono')
            break;
        case (mes == 'Junho'|| mes == 'Julho' || mes == 'Agosto'):
            console.log('Inverno')
            break;
    }
}
estacoesDoAno('Outubro')
estacoesDoAno('Janeiro')
estacoesDoAno('Abril')
estacoesDoAno('Julho')

//-------------------------------------------------------------

function mesDoAno(mes){
    mes = mes.toLowerCase();

    switch (true){
        case mes == 'janeiro':
            console.log('Janeiro tem 31 dias')
        break;
        case mes == 'fevereiro':
            console.log('Fevereiro tem 28 dias')
        break;
        case mes == ('marco' || 'março'):
            console.log('Março tem 31 dias')
        break;
        case mes == 'abril':
            console.log('Abril tem 30 dias')
        break;
        case mes == 'maio':
            console.log('Maio tem 31 dias')
        break;
        case mes == 'junho':
            console.log('Junho tem 30 dias')
        break;
        case mes == 'julho':
            console.log('Julho tem 31 dias')
        break;
        case mes == 'agosto':
            console.log('Agosto tem 31 dias')
        break;
        case mes == 'setembro':
            console.log('Setembro tem 30 dias')
        break;
        case mes == 'outubro':
            console.log('Outubro tem 31 dias')
        break;
        case mes == 'novembro':
            console.log('Novembro tem 30 dias')
        break;
        case mes == 'dezembro':
            console.log('Dezembro tem 31 dias')
        break;
    }
}

mesDoAno('janeiro')
mesDoAno('JANEIRO')
mesDoAno('JAneiro')

//----------------------------------------------------------------
let ano = 1
function mesDoAno(mes,ano){
    mes = mes.toLowerCase();

    switch (true){
        case (mes == 'janeiro'):
            console.log('Janeiro tem 31 dias')
        break;
        case mes == 'fevereiro':
            if((ano%400==0) || (ano%4==0 && ano%100!=0)){
            console.log('Fevereiro tem 29 dias')
            }
            else{
                console.log('Fevereito tem 28 dias')
            }
        break;
        case mes == 'marco':
            console.log('Março tem 31 dias')
        break;
        case mes == 'abril':
            console.log('Abril tem 30 dias')
        break;
        case mes == 'maio':
            console.log('Maio tem 31 dias')
        break;
        case mes == 'junho':
            console.log('Junho tem 30 dias')
        break;
        case mes == 'julho':
            console.log('Julho tem 31 dias')
        break;
        case mes == 'agosto':
            console.log('Agosto tem 31 dias')
        break;
        case mes == 'setembro':
            console.log('Setembro tem 30 dias')
        break;
        case mes == 'outubro':
            console.log('Outubro tem 31 dias')
        break;
        case mes == 'novembro':
            console.log('Novembro tem 30 dias')
        break;
        case mes == 'dezembro':
            console.log('Dezembro tem 31 dias')
        break;
    }
}

mesDoAno('fevereiro',2021)
mesDoAno('marco')