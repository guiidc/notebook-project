const btnCriarContato = document.querySelector('#button-criar-contato')
btnCriarContato.addEventListener('click', mostModalCriarCont)

const modalAddEd =document.querySelector('#modaladded')


function mostModalCriarCont(){
    modalAddEd.classList.remove('none')
}


//  console.log(btnCriarContato)