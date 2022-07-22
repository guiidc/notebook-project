const btnCriarContato = document.querySelector("#button-criar-contato")
const modal = document.querySelector('#modaladded');
const btnCancelar = document.querySelector('#btn-cancelar')
const btnSalvarContado = document.querySelector('#btn-salvar')
const inputNome = document.querySelector('#input-nome')
const inputContato = document.querySelector('#input-contato')
const inputGrupo = document.querySelector('#grupo')

// const btnEditar = document.querySelector('#btn-editar')

function mostrarModal1() {
    modal.classList.remove('none')
}

function fecharModal() {
    inputNome.value = ''
    inputContato.value = ''
    modal.classList.add('none')
}

function criaContato() {

    const nome = inputNome.value
    const contato = inputContato.value
    const grupo = inputGrupo.value
    // const editar = btnEditar.value
    

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

    // const containerBtnAcao = document.createElement('div')
    // containerBtnAcao.classList.add('container-btn-acao')

    // const btnAcao = document.createElement('button')
    // btnAcao.classList.add('btn-acao', 'bg-azul', 'pointer')
    // btnAcao.innerText = editar

    // containerBtnAcao.appendChild(btnAcao)
    // cardContatoDiv.appendChild(containerBtnAcao)

    // console.log()

    const sectionCard = document.querySelector('#section-card')
    sectionCard.appendChild(cardContatoDiv)

    modal.classList.add('none')
}

btnCriarContato.addEventListener('click', mostrarModal1)
btnCancelar.addEventListener('click', fecharModal)
btnSalvarContado.addEventListener('click', criaContato)
// btnEditar.addEventListener('click', )







