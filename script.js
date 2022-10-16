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
    if (dish != null && drink != null && overtable != null){FinalizarPedidoAtivar()}
}
let pedidoPronto =false;
function FinalizarPedidoAtivar() {
    const element = document.querySelector(".caixaCinza");
    element.innerHTML = "Finalizar pedido";
    element.classList.add("finalizarPedidoAtivado");
    pedidoPronto = true;
}
function OpenWhatsup(){
    if(pedidoPronto){
        let nomeDish =  dish.querySelector("h3").innerHTML;
        nomeDish = nomeDish.substr(3,nomeDish.length);
        nomeDish = nomeDish.replace(',','.');
        let nomeDrink =  drink.querySelector("h3").innerHTML;
        nomeDrink = nomeDrink.substr(3,nomeDrink.length);
        nomeDrink = nomeDrink.replace(',','.');
        let nomeDessert =  overtable.querySelector("h3").innerHTML;
        nomeDessert = nomeDessert.substr(3,nomeDessert.length);
        nomeDessert = nomeDessert.replace(',','.');
        let valorAPagar = (Number(nomeDish) + Number(nomeDrink) + Number(nomeDessert)).toFixed(2);
        let texto = `Olá, gostaria de fazer o pedido:
        - Prato: ${dish.querySelector("h2").innerHTML }
        - Bebida: ${drink.querySelector("h2").innerHTML}
        - Sobremesa: ${overtable.querySelector("h2").innerHTML}
        Total: R$ ${valorAPagar}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`);
    }
    else alert("Escolha um prato, uma bebida e uma sobremesa para poder finalizar o pedido!");
}
