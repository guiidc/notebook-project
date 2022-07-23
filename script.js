const btnCriarContato = document.querySelector("#button-criar-contato")
const modal = document.querySelector('#modaladded');
const btnCancelar = document.querySelector('#btn-cancelar')
const btnSalvarContado = document.querySelector('#btn-salvar')
const inputNome = document.querySelector('#input-nome')
const inputContato = document.querySelector('#input-contato')
const inputGrupo = document.querySelector('#grupo')
const btnCancelarRemocao = document.querySelector('#btn-cancelar-remocao')
const modalRemover = document.querySelector('#modal-remover')

// const btnEditar = document.querySelector('#btn-editar')

function mostrarModal1() {
    modal.classList.remove('none')
}

function limparInputs(){
    inputNome.value = ''
    inputContato.value = ''
}

function fecharModal() {
    limparInputs()
    modal.classList.add('none')

}

function fecharModalRemover(){
    
    modalRemover.classList.remove('none')
    
}

function fecharModalRemocao(){
    modalRemover.classList.add('none')
}

function criaContato() {

    const nome = inputNome.value
    const contato = inputContato.value
    const grupo = inputGrupo.value
    

    const cardContatoDiv = document.createElement('div')
    cardContatoDiv.classList.add('card-contato')

    const containerNome = document.createElement('div')
    containerNome.classList.add('flex-center')

    const spanNome = document.createElement('span')
    spanNome.classList.add('fonte-card')
    spanNome.innerText = nome

    containerNome.appendChild(spanNome)
    cardContatoDiv.appendChild(containerNome)

    const containerCardContato = document.createElement('div')
    containerCardContato.classList.add('flex-center')

    const spanContato = document.createElement('span')
    spanContato.classList.add('fonte-card')
    spanContato.innerText = contato

    containerCardContato.appendChild(spanContato)
    cardContatoDiv.appendChild(containerCardContato)

    const containerCardGrupo = document.createElement('div')
    containerCardGrupo.classList.add('flex-center')

    const spanGrupo = document.createElement('span')
    spanGrupo.classList.add('fonte-card')
    spanGrupo.innerText = grupo

    containerCardGrupo.appendChild(spanGrupo)
    cardContatoDiv.appendChild(containerCardGrupo)

    const containerBtnAcao = document.createElement('div')
    containerBtnAcao.classList.add('container-btn-acao')

    const btnEditar = document.createElement('button')
    btnEditar.classList.add('btn-acao', 'bg-azul', 'pointer')
    btnEditar.innerText = 'EDITAR'
    btnEditar.addEventListener('click', mostrarModal1)

    containerBtnAcao.appendChild(btnEditar)

    const btnRemover = document.createElement('button')
    btnRemover.classList.add('btn-acao', 'bg-vermelho', 'pointer')
    btnRemover.innerText ='REMOVER'
    btnRemover.addEventListener('click', fecharModalRemover)

    containerBtnAcao.appendChild(btnRemover)
    cardContatoDiv.appendChild(containerBtnAcao)



    // console.log(btnRemor)

    const sectionCard = document.querySelector('#section-card')
    sectionCard.appendChild(cardContatoDiv)

   limparInputs()
    modal.classList.add('none')
    
}

btnCriarContato.addEventListener('click', mostrarModal1)
btnCancelar.addEventListener('click', fecharModal)
btnSalvarContado.addEventListener('click', criaContato)
btnCancelarRemocao.addEventListener('click', fecharModalRemocao)








