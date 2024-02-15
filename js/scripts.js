
var compra = false;

function comprar() {

    let imagem = document.getElementById('carrinho');
    
    compra = !compra; //Inverte o valor atual que está em memória

    if(compra){
        imagem.src = 'img/vendas2.png';
    } else {
        imagem.src = 'img/vendas.png';
    }
    
}