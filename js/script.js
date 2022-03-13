const verificar = document.getElementsByClassName('verificar')[0]

const veri = () => {
    const result = document.getElementsByClassName('result')[0]
    const primeiraNota = Number(document.getElementById('primeira-nota').value)
    const segundaaNota = Number(document.getElementById('segunda-nota').value)
    const terceiraNota = Number(document.getElementById('terceira-nota').value)
    const quartaNota = Number(document.getElementById('quarta-nota').value)

    const mediaDeNotas = (primeiraNota + segundaaNota + terceiraNota + quartaNota) / 4

    if(mediaDeNotas < 7){
        result.innerHTML = `Sua média é: ${mediaDeNotas}, REPROVADO ` 
    }else{
        result.innerHTML = `Sua média é: ${mediaDeNotas}, APROVADO ` 
    }

    
}
verificar.addEventListener('click', veri)
