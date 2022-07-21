function mostrarModal1(){
    const modal = document.querySelector('#modaladded');
    modal.classList.remove('none')
} 
const btnCriarContato = document.querySelector("#button-criar-contato")
btnCriarContato.addEventListener('click',  mostrarModal1)




