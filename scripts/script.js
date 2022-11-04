let tPrato, tBebida, tSobremesa;

let pPrato, pBebida, pSobremesa;

let total;

let msg;

function selecionarPrato(pratoClicado, seletorTitulo){// pegar o prato que foi clicado e trazer para o javascript - usando o this

    // pegar o elemento que foi selecionado anteriormente
    const pratoSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');

    // antes de remover, vou verificar se pratoSelecionadoAnteriormente não é null
    if ( pratoSelecionadoAnteriormente !== null){
        // remover a classe selecionado dele         
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    // adcionar a classe selecionado no elemento que foi clicado, prato!
    pratoClicado.classList.add('selecionado');

    // pegar o titulo do prato
    const elementoTitulo = document.querySelector(seletorTitulo+' .titulo');
    const elementoPreco = document.querySelector(seletorTitulo+' .preco');
    // pegar o texto que esta no elemento

    tPrato = elementoTitulo.innerHTML;
    pPrato = elementoPreco.innerHTML;

    ativarBotaoFecharPedido();
}

function selecionarBebida(bebidaSelecionada, seletorTitulo){// pegar a bebida que foi clicada - this
    
    // pergar a bebida que selecionada anteriormente
    const bebidaSelecionadaAnteriomente  = document.querySelector('.bebidas .selecionado');

    // antes de remover, verificar se existe uma bebida que foi selecionada anteriormente (verificando se é diferente de null)
    if ( bebidaSelecionadaAnteriomente !== null){
        // remover a classe 'selecionado' da bebida selecionada anteriormente
        bebidaSelecionadaAnteriomente.classList.remove('selecionado');
    }
    
    // marcar como selecionada adicionando a classe 'selecionado'
    bebidaSelecionada.classList.add('selecionado');

    // pegar o titulo 
    const elementoTitulo = document.querySelector(seletorTitulo+' .titulo');
    // pegar o texto que esta no elemento

    const elementoPreco = document.querySelector(seletorTitulo+' .preco');
    // pegar o texto que esta no elemento

    tBebida = elementoTitulo.innerHTML;
    pBebida = elementoPreco.innerHTML;

    ativarBotaoFecharPedido();
}

function selecionaSobremesa(sobremesaClicada, seletorTitulo){

    const sobremesaSelecionadaAnteriormete = document.querySelector('.sobremesas .selecionado');

    if ( sobremesaSelecionadaAnteriormete !== null) {
        sobremesaSelecionadaAnteriormete.classList.remove('selecionado');
    }

    sobremesaClicada.classList.add('selecionado');

    // pegar o titulo 
    const elementoTitulo = document.querySelector(seletorTitulo+' .titulo');
    // pegar o texto que esta no elemento

    const elementoPreco = document.querySelector(seletorTitulo+' .preco');
    // pegar o texto que esta no elemento

    tSobremesa = elementoTitulo.innerHTML;
    pSobremesa = elementoPreco.innerHTML;

    ativarBotaoFecharPedido();
}

function ativarBotaoFecharPedido(){
   
    // se prato estiver selecionado
    if( tPrato !== undefined){
        // se a bebida foi selecionada
        if ( tBebida !== undefined){
            // se a sobremesa foi selecionada
            if ( tSobremesa !== undefined){                
                // pegar o botão e trazer para o javascript
                const botao = document.querySelector('.fazer-pedido');
                // adcionar a classe selecionado nesse botao adicionando a classe 'ativo'
                botao.classList.add('ativo');
                // trocar o texto do botão para 'Fechar Pedido'
                botao.innerHTML = 'Fechar Pedido';
            }
        }
    }

}

function fecharPedido(){

     // se prato estiver selecionado
     if( tPrato !== undefined){
        // se a bebida foi selecionada
        if ( tBebida !== undefined){
            // se a sobremesa foi selecionada
            if ( tSobremesa !== undefined){ 
                // Calcular o valor total dos pratos
                pPrato = pPrato.replace('R$ ','');
                pBebida = pBebida.replace('R$ ','');
                pSobremesa = pSobremesa.replace('R$ ','');

                pPrato = pPrato.replace(',','.');
                pBebida = pBebida.replace(',','.');
                pSobremesa = pSobremesa.replace(',','.');

                total = Number(pPrato) + Number(pSobremesa) + Number(pBebida);    

                console.log(total); 

                // montar a mensagem que será enviada com os dados dos items selecionados
                msg = `Olá, gostaria de fazer o pedido:
                - Prato: R$ ${tPrato}
                - Bebida: R$ ${tBebida}
                - Sobremesa: R$ ${tSobremesa}
                Total: R$ ${total.toFixed(2)}`; 


                const telaFechamento = document.querySelector('.overlay');
                telaFechamento.classList.remove('escondido');

                // preencher os elemento da tela de fechamento
                const nomePrato = document.querySelector('.prato .nome');
                nomePrato.innerHTML = tPrato;
                const precoPrato = document.querySelector('.prato .preco');
                precoPrato.innerHTML = pPrato;

                const nomeBebida = document.querySelector('.bebida .nome');
                nomeBebida.innerHTML = tBebida;
                const precoBebida = document.querySelector('.bebida .preco');
                precoBebida.innerHTML = pBebida;

                const nomeSobremesa = document.querySelector('.sobremesa .nome');
                nomeSobremesa.innerHTML = tSobremesa;
                const precoSobremesa = document.querySelector('.sobremesa .preco');
                precoSobremesa.innerHTML = pSobremesa;

                const elementoTotal = document.querySelector('.total .preco-total');
                elementoTotal.innerHTML = `R$ ${total.toFixed(2)}`;
            }
        }
    }
}

function cancelar(){
    const telaFechamento = document.querySelector('.overlay');
    telaFechamento.classList.add('escondido');
}

function enviarWP(){       

    const nome = prompt('Seu nome');
    const endereco = prompt('Seu endereco');

    msg = msg + `Nome: ${nome} Endereco: ${endereco}`;

    // preparar a mensage com encodeURIComponent
    const msgWP = encodeURIComponent(msg);

    // abrir o whatsapp web e encaminhar a mensagem
    window.open(`http://wa.me/99999999999?text=${msgWP}`);
}