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

    const ContainerCardContato = criaElemento('div', ['container-card-contato'])

    const divNome = criaElemento('div', ['flex-center'])
    const spanNome = criaElemento('span', ['fonte-card'], nome)

    divNome.appendChild(spanNome)
    ContainerCardContato.appendChild(divNome)

    const divContato = criaElemento('div', ['flex-center'])

    const spanContato = criaElemento('span', ['fonte-card'], contato)
    divContato.appendChild(spanContato)
    ContainerCardContato.appendChild(divContato)

    const divGrupo = criaElemento('div', ['flex-center'])

    const spanGrupo = criaElemento('span', ['fonte-card'], grupo)
    divGrupo.appendChild(spanGrupo)
    ContainerCardContato.appendChild(divGrupo)

    const containerBtnAcao = criaElemento('div', ['container-btn-acao'])

    const btnAcaoEditar = criaElemento('button', ['btn-acao', 'bg-azul', 'pointer'], 'EDITAR')
    btnAcaoEditar.addEventListener('click', mostrarModalCriarCont)
    containerBtnAcao.appendChild(btnAcaoEditar)
    
    const btnAcaoRemover = criaElemento('button', ['btn-acao', 'bg-vermelho', 'pointer'], 'REMOVER')
    btnAcaoRemover.addEventListener('click', mostrarModalRemover)
    containerBtnAcao.appendChild(btnAcaoRemover)
    ContainerCardContato.appendChild(containerBtnAcao)

    sectionCard.appendChild(ContainerCardContato)

    modalAddEd.classList.add('none')

    limparImputs()
}