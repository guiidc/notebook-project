const btnCriarContato = document.querySelector('#button-criar-contato')
const sectionCard = document.querySelector('#section-card')
const modalAddEd = document.querySelector('#modal-add-ed')
const btnSalvarContato = document.querySelector('#btn-salvar')
const inputNome = document.querySelector('#input-nome')
const inputContato = document.querySelector('#input-contato')
const inputGrupo = document.querySelector('#grupo')
const idBtnCancelar = document.querySelector('#btn-cancelar')
const modalRemover = document.querySelector('#modal-remover')
const btnCancelarRemocao = document.querySelector('#btn-cancelar-remocao')
const btnRemoverContatoSelecionado = document.querySelector('#btn-remover-contato-selecionado')

btnCriarContato.addEventListener('click', mostrarModalCriarCont)
btnSalvarContato.addEventListener('click', salvaContato)
idBtnCancelar.addEventListener('click', fecharModalCadastro)
btnCancelarRemocao.addEventListener('click', fecharModalRemocao)
btnRemoverContatoSelecionado.addEventListener('click', removerContatoSelecionado)

function mostrarModalCriarCont() {
    modalAddEd.classList.remove('none')
}

let contatoASerRemovido = null;

function mostrarModalRemover(evento) {
    const target = evento.target; // SEGURA O BOTAO REMOVER QUE DISPAROU O EVENTO
    const containerBotoesAcao = target.parentElement;
    const cardContact = containerBotoesAcao.parentElement
    contatoASerRemovido = cardContact

    modalRemover.classList.remove('none')
}

function fecharModalCadastro() {
    limparImputs()
    modalAddEd.classList.add('none')
}

function limparImputs() {
    inputNome.value = ''
    inputContato.value = ''
}

function fecharModalRemocao() {
    modalRemover.classList.add('none')
}

function removerContatoSelecionado() {
    contatoASerRemovido.remove()
    fecharModalRemocao()
}

function criaElemento(elemento, classes, texto) {
    const novoElemento = document.createElement(elemento);
    for (let i = 0; i < classes.length; i++) {
        novoElemento.classList.add(classes[i]);
    }
    if (texto !== undefined) {
        novoElemento.innerText = texto
    }
    return novoElemento
}

function salvaContato() {
    const nome = inputNome.value
    const contato = inputContato.value
    const grupo = inputGrupo.value

    // const ContainerCardContato = document.createElement('div')
    // ContainerCardContato.classList.add('container-card-contato')
    const ContainerCardContato = criaElemento('div', ['container-card-contato'])

    // const divNome = document.createElement('div')
    // divNome.classList.add('flex-center')
    const divNome = criaElemento('div', ['flex-center'])

    // const spanNome = document.createElement('span')
    // spanNome.classList.add('fonte-card')
    // spanNome.innerText = nome
    const spanNome = criaElemento('span', ['fonte-card'], nome)

    divNome.appendChild(spanNome)
    ContainerCardContato.appendChild(divNome)

    // const divContato = document.createElement('div')
    // divContato.classList.add('flex-center')
    const divContato = criaElemento('div', ['flex-center'])

    // const spanContato = document.createElement('span')
    // spanContato.classList.add('fonte-card')
    // spanContato.innerText = contato
    const spanContato = criaElemento('span', ['fonte-card'], contato)
    divContato.appendChild(spanContato)
    ContainerCardContato.appendChild(divContato)

    // const divGrupo = document.createElement('div')
    // divGupo.classList.add('flex-center')
    const divGrupo = criaElemento('div', ['flex-center'])

    // const spanGrupo = document.createElement('span')
    // spanGrupo.classList.add('fonte-card')
    // spanGrupo.innerText = grupo
    const spanGrupo = criaElemento('span', ['fonte-card'], grupo)
    divGrupo.appendChild(spanGrupo)
    ContainerCardContato.appendChild(divGrupo)

    // const containerBtnAcao = document.createElement('div')
    // containerBtnAcao.classList.add('container-btn-acao')
    const containerBtnAcao = criaElemento('div', ['container-btn-acao'])

    // const btnAcaoEditar = document.createElement('button')
    // btnAcaoEditar.classList.add('btn-acao', 'bg-azul', 'pointer')
    // btnAcaoEditar.innerText = 'EDITAR'
    const btnAcaoEditar = criaElemento('button', ['btn-acao', 'bg-azul', 'pointer'], 'EDITAR')
    btnAcaoEditar.addEventListener('click', mostrarModalCriarCont)
    containerBtnAcao.appendChild(btnAcaoEditar)

    // const btnAcaoRemover = document.createElement('button')
    // btnAcaoRemover.classList.add('btn-acao', 'bg-vermelho', 'pointer')
    // btnAcaoRemover.innerText = 'REMOVER'
    const btnAcaoRemover = criaElemento('button', ['btn-acao', 'bg-vermelho', 'pointer'], 'REMOVER')
    btnAcaoRemover.addEventListener('click', mostrarModalRemover)
    containerBtnAcao.appendChild(btnAcaoRemover)
    ContainerCardContato.appendChild(containerBtnAcao)

    sectionCard.appendChild(ContainerCardContato)

    modalAddEd.classList.add('none')

    limparImputs()
}