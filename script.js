
const form = document.getElementById('formulario');
const campos = document.getElementById('campos');

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    var nome = evento.target.elements['nome'].value;
    var quantidade = evento.target.elements['quantidade'].value;
    criaElemento(nome, quantidade)
});

function criaElemento(nome, quantidade) {
    
}
