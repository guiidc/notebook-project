const btnCriarContato = document.querySelector('#button-criar-contato') 
btnCriarContato.addEventListener('click', chamarModal1) 

const modalCriaContato = document.querySelector('#modaladded') 

function chamarModal1() {
    modalCriaContato.classList.remove('none')

}
