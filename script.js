
const btnCriarContato = document.querySelector("#button-criar-contato")

function mostrarModal1() {
    const modal = document.querySelector('#modaladded');
    modal.classList.remove('none')
    
}

btnCriarContato.addEventListener('click', mostrarModal1)

function criaContato() {
    const inputNome = document.querySelector('#input-nome')
    const nome = inputNome.value
    const inputContato = document.querySelector('#input-contato')
    const contato = inputContato.value
    const inputGrupo = document.querySelector('#grupo')
    const grupo = inputGrupo.value

    const cardContatoDiv = document.createElement('div')
    cardContatoDiv.classList.add('card-contato')

    const containerNome = document.createElement('div')
    containerNome.classList.add('container-section-4')
    const spanNome = document.createElement('span')
    spanNome.classList.add('section-4')
    spanNome.innerText = nome
    containerNome.appendChild(spanNome)
    cardContatoDiv.appendChild(containerNome)
    console.log(cardContatoDiv)
    console.log(containerNome)
    

}

const btnSalvarContado = document.querySelector('#salvar')
btnSalvarContado.addEventListener('click', criaContato)





