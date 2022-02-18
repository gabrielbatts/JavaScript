
/* const DiaSemana = Data.getDay()
const mes = Data.getMonth()
const diames = Data.getDate()
const ano = Data.getFullYear()
const hora = Data.getHours()
const min = Data.getMinutes()
let Diatext
let mest
switch(DiaSemana){ 
    case 0: 
        mest = 'Janeiro'
        break
    case 1 :
        mest = 'Fevereiro'
        break
    case 2 :
        mest = 'Março'
        break
    case 3 :
        mest = 'Abril'
        break
    case 4 :
        mest = 'Maio'
        break
    case 5 :
        mest = 'Junho'
        break
    case 6 :
        mest = 'Julho'
        break
    case 7 :
            mest = 'Agosto'
            break
    case 8 :
        mest = 'Setembro'
        break
    case 9 :
        mest = 'Outubro'
        break
    case 10 :
        mest = 'Novembro'
        break
    case 11 :
        mest = 'Dezembro'
        break
    default:
        mest= ''
        break
    }

    switch(mes){ 
        case 0: 
            Diatext = 'Domingo'
            break
        case 1 :
            Diatext = 'Segunda-Feira'
            break
        case 2 :
            Diatext = 'Terça-feira'
            break
        case 3 :
            Diatext = 'Quarta-Feira'
            break
        case 4 :
            Diatext = 'Quinta-Feira'
            break
        case 5 :
            Diatext = 'Sexta-Feira'
            break
        case 6 :
            Diatext = 'Sábado'
            break
        default:
            Diatext= 'Dia Inválido'
            break
        }
    console.log(`${Diatext}, ${diames} de ${mest} de ${ano} ${hora}:${min}`) */
    const Data = new Date()
    let h1 = document.getElementById('hr')
    let hora = Data.getHours()   
    h1.innerHTML =`${Data.toLocaleDateString('pt-BR', {dateStyle:'full'})}<br>` // vai formatar para string a data completa 
    h1.innerHTML += Data.toLocaleString('pt-br',{timeStyle:'short'})
