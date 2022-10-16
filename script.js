let dish;
function Selecionar(prato) {
    if (document.querySelector(".opcoesPratos .selecionado") != null) {
        document.querySelector(".opcoesPratos .selecionado").classList.remove("selecionado");
    }
    prato.classList.add("selecionado");
    dish = prato;
    checkPedido()
}
let drink;
function SelecionarBebida(bebida) {
    if (document.querySelector(".opcoesBebidas .selecionado") != null) {
        document.querySelector(".opcoesBebidas .selecionado").classList.remove("selecionado");
    }
    bebida.classList.add("selecionado");
    drink = bebida;
    checkPedido()
}
let overtable;
function SelecionarOvertable(mesa) {
    if (document.querySelector(".opcoesSobremesas .selecionado") != null) {
        document.querySelector(".opcoesSobremesas .selecionado").classList.remove("selecionado");
    }
    mesa.classList.add("selecionado");
    overtable = mesa;
    checkPedido()
}
function checkPedido() {
    if (dish != null && drink != null && overtable != null) { FinalizarPedidoAtivar() }
}
let pedidoPronto = false;
function FinalizarPedidoAtivar() {
    const element = document.querySelector(".caixaCinza");
    element.innerHTML = "Finalizar pedido";
    element.classList.add("finalizarPedidoAtivado");
    pedidoPronto = true;
}
let total = 0;
function PromptFinalizarPedido() {
    if (pedidoPronto) {
        let prompt = document.querySelector('.confirmacaoPedido');
        prompt.classList.remove("invisivel");

        prompt.querySelector(".principal h2").innerHTML = dish.querySelector("h2").innerHTML;
        let nomeDish = dish.querySelector("h3").innerHTML;
        nomeDish = nomeDish.substr(3, nomeDish.length)
        prompt.querySelector(".principal p").innerHTML = nomeDish;
        nomeDish = nomeDish.replace(',', '.');


        prompt.querySelector(".bebida h2").innerHTML = drink.querySelector("h2").innerHTML;
        let nomeDrink = drink.querySelector("h3").innerHTML;
        nomeDrink = nomeDrink.substr(3, nomeDrink.length)
        prompt.querySelector(".bebida p").innerHTML = nomeDrink;
        nomeDrink = nomeDrink.replace(',', '.');

        prompt.querySelector(".sobremesa h2").innerHTML = overtable.querySelector("h2").innerHTML;
        let nomeDessert = overtable.querySelector("h3").innerHTML;
        nomeDessert = nomeDessert.substr(3, nomeDessert.length)
        prompt.querySelector(".sobremesa p").innerHTML = nomeDessert;
        nomeDessert = nomeDessert.replace(',', '.');

        total = (Number(nomeDish) + Number(nomeDrink) + Number(nomeDessert)).toFixed(2);
        prompt.querySelector(".totalPedido h2").innerHTML = "R$ " + total.replace('.', ',');
    }
    else alert("Escolha um prato, uma bebida e uma sobremesa para poder fazer o pedido!");
}

function OpenWhatsup() {
    let nome = prompt("Informe seu Nome:");
    let endereco = prompt("Agora informe seu endereco:");
    let texto = `Olá, gostaria de fazer o pedido: 
        - Prato: ${dish.querySelector("h2").innerHTML}
        - Bebida: ${drink.querySelector("h2").innerHTML}
        - Sobremesa: ${overtable.querySelector("h2").innerHTML}
        Total: R$ ${total}
        
        Nome: ${nome}
        Endereço: ${endereco}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`);
}
