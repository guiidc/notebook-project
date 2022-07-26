const sectionCard = document.querySelector('#section-card')
const btnCriarContato = document.querySelector('#button-criar-contato')
const modalAddEd = document.querySelector('#modaladded')
const btnSalvarContato = document.querySelector('#btn-salvar')
const inputNome = document.querySelector('#input-nome')
const inputContato = document.querySelector('#input-contato')
const inputGrupo = document.querySelector('#grupo')
const idBtnCancelar = document.querySelector('#btn-cancelar')


btnCriarContato.addEventListener('click', mostrarModalCriarCont)
btnSalvarContato.addEventListener('click', salvaContato)
idBtnCancelar.addEventListener('click', fecharModalCadastro)


function mostrarModalCriarCont(){
    modalAddEd.classList.remove('none')
} 

function fecharModalCadastro(){
    modalAddEd.classList.add('none')
}


function salvaContato(){
    const nome = inputNome.value
    const contato = inputContato.value
    const grupo = inputGrupo.value

    const ContainerCardContato = document.createElement('div')
    ContainerCardContato.classList.add('container-card-contato')

    const divNome = document.createElement('div')
    divNome.classList.add('flex-center')
    const spanNome = document.createElement('span')
    spanNome.classList.add('fonte-card')
    spanNome.innerText = nome
    divNome.appendChild(spanNome)    
    ContainerCardContato.appendChild(divNome)

    const divContato = document.createElement('div')
    divContato.classList.add('flex-center')
    const spanContato = document.createElement('span')
    spanContato.classList.add('fonte-card')
    spanContato.innerText = contato
    divContato.appendChild(spanContato)
    ContainerCardContato.appendChild(divContato)

    const divGupo = document.createElement('div')
    divGupo.classList.add('flex-center')
    const spanGrupo = document.createElement('span')
    spanGrupo.classList.add('fonte-card')
    spanGrupo.innerText = grupo
    divGupo.appendChild(spanGrupo)
    ContainerCardContato.appendChild(divGupo)

    const containerBtnAcao = document.createElement('div')
    containerBtnAcao.classList.add('container-btn-acao')
    const btnAcaoEditar = document.createElement('button')
    btnAcaoEditar.classList.add('btn-acao', 'bg-azul', 'pointer')
    btnAcaoEditar.innerText = 'EDITAR'
    containerBtnAcao.appendChild(btnAcaoEditar)
    
    const btnAcaoRemover = document.createElement('button')
    btnAcaoRemover.classList.add('btn-acao', 'bg-vermelho', 'pointer')
    btnAcaoRemover.innerText = 'REMOVER'
    containerBtnAcao.appendChild(btnAcaoRemover)
    
    ContainerCardContato.appendChild(containerBtnAcao)

    sectionCard.appendChild(ContainerCardContato)
    fecharModalCadastro();
}


//  console.log(btnCriarContato)