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
    // ESTAMOS RECEBENDO UM PARAMETRO QUE REPRESENTA O EVENTO
    // POREM PODEMOS CHAMAR DE QUALQUER NOME QUE QUISERMOS
    // POIS SE TRATA DE UM PARAMETRO COMO QUALQUER OUTRO
    // PODERIAMOS CHAMAR A OU B, MAS ESTAMOS CHAMANDO DE EVENTO
    // POR MOTIVOS DE CONTEXTO

    // NESTE EVENTO TEMOS UM PROPRIEDADE CHAMADA TARGET
    // QUE É O ELEMENTO QUE DISPAROU O EVENTO
    // ENTAO PARA PEGARMOS BASTA DIGITAR O elemento.taget

    const target = evento.target; // SEGURA O BOTAO REMOVER QUE DISPAROU O EVENTO

    // NOS ELEMENTOS HTML (EM TODOS) TEMOS UMA PROPRIEDADE CHAMADA

    // elemento.parentElment QUE ENTREGA O PAI DO ELEMENTO EM QUESTAO
    // ENTAO SE PEGARMOS O BOTAO QUE OBTVEMOS COM O TARGET E BUSCARMOS A PROPRIEDADE
    // PARENTELEMENT DELE, VAMOS OBTER O PAI DO BOTAO QUE É O CONTAINER
    const containerBotoesAcao = target.parentElement;

    // AQUI PEGAMOS O PAI DO BOTAO QUE ENCONTRAMOS E BUSCAMOS MAIS UMA VEZ O PAI
    // UTILIZANDO O elemento.parentElement PEGANDO ASSIM O PAI DO CONTAINER
    // QUE SEGURA OS BOTÕES (AVÔ DOS BOTÕES) QUE É JUSTAMENTO NOSSO CARD DE CONTATOS
    const cardContact = containerBotoesAcao.parentElement

    // COMO SABEMOS QUE TODO CLIQUE IREMOS RECRIAR O CODIGO DENTRO DESTA FUNCAO
    // PRECISAMOS DEIXA ESSE "AVÔ" QUE É NOSSO CARD SALVO EM UMA VARIAVEL GLOBAL
    // PARA QUE NOSSA FUNCAO removerContatoSelecionado QUE É QUEM DE FATO REMOVE O CONTATO
    // POIS ELA É DISPARADA PELO BOTAO DE REMOVER DO MODAL
    // A FUNCAO QUE ESTAMOS DENTRO ATUALMENTE É DISPARADA PELO BOTAO REMOVER DO CARD
    // ENTAO COMO PRECISAMOS DA INFORMACAO DE CONFIRMACAO DO USUARIO
    // NAO PODEMOS REMOVER ELA AQUI DENTRO DESTA FUNCAO
    contatoASerRemovido = cardContact

    // AQUI NADA DE NOVO, SOMENTE STAMOS REMOVENDO A CLASSE NONE DO MODAL DE CONFIRMACAO DE REMOCAO
    // PARA QUE ELE SEJA EXIBIDO PRO USUÁRIO
    // O PROXIMOS PASSO ESTRA DENTRO DA FUNCAO QUE REMOVE O USUARIO DE FATO
    // CHAMADA DE removerContatoSelecionado
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
    // AQUI ESTAMOS ACESSANDO A VARIAVEL GLOBAL CRIADA PELA FUNCAO
    // mostrarModalRemover
    contatoASerRemovido.remove()

    //AQUI ESTAMOS SOMENTE FECHANDO O MODAL
    fecharModalRemocao()
}

function salvaContato() {
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
    btnAcaoEditar.addEventListener('click', mostrarModalCriarCont)
    containerBtnAcao.appendChild(btnAcaoEditar)

    const btnAcaoRemover = document.createElement('button')
    btnAcaoRemover.classList.add('btn-acao', 'bg-vermelho', 'pointer')
    btnAcaoRemover.innerText = 'REMOVER'

    // O JAVA SCRIPT SEMPRE PASSA UM PARAMETRO PRA FUNCAO APONTADA
    // NO EVENTLISTENER QUE É O EVENTO
    // EM TODAS ELAS, MAS COMO NAO PRECISAMOS USAR
    // ACABAMOS NAO VENDO ELE
    // NESTA FUNCAO DE BAIXO, NÓS VAMOS TRABALHAR COM ELE
    // DENTRO DA FUNCAO VOCÊ VAI VER ELE
    btnAcaoRemover.addEventListener('click', mostrarModalRemover)

    
    containerBtnAcao.appendChild(btnAcaoRemover)

    ContainerCardContato.appendChild(containerBtnAcao)

    sectionCard.appendChild(ContainerCardContato)

    modalAddEd.classList.add('none')

    limparImputs()

}