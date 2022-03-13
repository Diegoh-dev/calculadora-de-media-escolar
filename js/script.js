const verificar = document.getElementsByClassName('verificar')[0]

const veri = () => {
    const primeiraNota = Number(document.getElementById('primeira-nota').value)
    const segundaaNota = Number(document.getElementById('segunda-nota').value)
    const terceiraNota = Number(document.getElementById('terceira-nota').value)
    const quartaNota = Number(document.getElementById('quarta-nota').value)

    const mediaDeNotas = (primeiraNota + segundaaNota + terceiraNota + quartaNota)
    console.log(mediaDeNotas)
}
verificar.addEventListener('click', veri)
