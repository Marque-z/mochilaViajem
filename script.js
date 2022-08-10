
const form = document.getElementById('formulario');
const campos = document.getElementById('campos');
var itemSalvoList = JSON.parse(localStorage.getItem("dadosSalvos"))||[];

if(itemSalvoList != null){
    itemSalvoList.forEach(itemAtual => {
        criarElemento(itemAtual.nome, itemAtual.quantidade)
    });
}

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    var nome = evento.target.elements['nome'].value;
    var quantidade = evento.target.elements['quantidade'].value;
    salvarDado(nome, quantidade);
});

function salvarDado(nome, quantidade) {
    if((nome == null || quantidade == null) || (nome == '' || quantidade == '')){
    }else{
        var novoItem = {
            "nome":nome,
            "quantidade":quantidade
        }
        var itemRepetido = false;
        itemSalvoList.forEach(itemAtual => {
            if(nome == itemAtual.nome){
                itemAtual.quantidade = Number(itemAtual.quantidade) + Number(quantidade);
                itemRepetido = true;
                return;
            }
        })
    
        if(!itemRepetido){
            itemSalvoList.push(novoItem);
            criarElemento(nome, quantidade);
            localStorage.setItem("dadosSalvos", JSON.stringify(itemSalvoList));
            window.location.reload()
        }else{
            localStorage.setItem("dadosSalvos", JSON.stringify(itemSalvoList));
            window.location.reload()
        }
    }
}

function criarElemento(nome, quantidade) {
    var novoItem = document.createElement('li');
    novoItem.classList.add("item");

    var botaoDelete = document.createElement('div');
    botaoDelete.classList.add("botaoDelete");
    botaoDelete.innerHTML = 'X';
    botaoDelete.addEventListener('click',() => deletarItem(botaoDelete));
    
    var numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;
    numeroItem.classList.add("numero");

    var textoItem = document.createElement('h5');
    textoItem.innerHTML = nome
    
    novoItem.appendChild(numeroItem);
    novoItem.appendChild(textoItem);
    novoItem.appendChild(botaoDelete);

    document.querySelector('.lista').appendChild(novoItem);
}
function deletarItem(botao){
    var li = botao.parentElement;
    var item = li.querySelector('h5');
    
    var itemSalvoAtualizado = itemSalvoList.filter((itemSalvo)=>itemSalvo.nome != item.innerHTML)
    localStorage.setItem("dadosSalvos", JSON.stringify(itemSalvoAtualizado));
    window.location.reload()
}