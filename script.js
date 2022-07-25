const modal = document.querySelector('#modaladded')
const btnCriarContato = document.querySelector('#button-criar-contato')
const btnCancelar = document.querySelector('#btn-cancelar')
const btnSalvarContato = document.querySelector('#btn-salvar')
const btnCancelarRemocao = document.querySelector('#btn-cancelar-remocao')
const modalRemover = document.querySelector('#modal-remover')
const inputNome = document.querySelector('#input-nome')
const inputContato = document.querySelector('#input-contato')
const inputGrupo = document.querySelector('#grupo')

function mostrarModal1() {
    modal.classList.remove('none')
}

function limparInputs() {
    inputNome.value = ''
    inputContato.value = ''
}

function fecharModal1() {
    limparInputs()
    modal.classList.add('none')
}

function fecharModalRemover() {
    modalRemover.classList.remove('none')
} 

function fecharModalRemocao(){
    modalRemover.classList.add('none')
}

function criarContato() {

    const nome = inputNome.value
    const contato = inputContato.value
    const grupo = inputGrupo.value

    const cardContato = document.createElement('div')
    cardContato.classList.add('card-contato')

    const divNome = document.createElement('div')
    divNome.classList.add('flex-center')

    const spanNome = document.createElement('span')
    spanNome.classList.add('fonte-card')
    spanNome.innerText = nome

    divNome.appendChild(spanNome)
    cardContato.appendChild(divNome)

    const divContato = document.createElement('div')
    divContato.classList.add('flex-center')

    const spanContato = document.createElement('span')
    spanContato.classList.add('fonte-card')
    spanContato.innerText = contato

    divContato.appendChild(spanContato)
    cardContato.appendChild(divContato)

    const divGrupo = document.createElement('div')
    divGrupo.classList.add('flex-center')

    const spanGrupo = document.createElement('span')
    spanGrupo.classList.add('fonte-card')
    spanGrupo.innerText = grupo

    divGrupo.appendChild(spanGrupo)
    cardContato.appendChild(divGrupo)

    const divContainerBtnAcao = document.createElement('div')
    divContainerBtnAcao.classList.add('container-btn-acao')

    const btnEditar = document.createElement('button')
    btnEditar.classList.add('btn-acao', 'bg-azul', 'pointer')
    btnEditar.innerText = 'EDITAR'
    btnEditar.addEventListener('click', mostrarModal1)

    divContainerBtnAcao.appendChild(btnEditar)

    const btnRemover = document.createElement('button')
    btnRemover.classList.add('btn-acao', 'bg-vermelho', 'pointer')
    btnRemover.innerText = 'REMOVER'
    btnRemover.addEventListener('click', fecharModalRemover)

    divContainerBtnAcao.appendChild(btnRemover)
    cardContato.appendChild(divContainerBtnAcao)


    const sectionCard = document.querySelector('#section-card')
    sectionCard.appendChild(cardContato)


    limparInputs()
    modal.classList.add('none')

}

btnCriarContato.addEventListener('click', mostrarModal1)
btnCancelar.addEventListener('click', fecharModal1)
btnSalvarContato.addEventListener('click', criarContato)
btnCancelarRemocao.addEventListener('click', fecharModalRemocao)