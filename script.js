
function Selecionar(prato) {
    if (prato.classList.contains("principal")) {
        if (document.querySelector(".opcoesPratos .selecionado") != null) {
            document.querySelector(".opcoesPratos .selecionado").classList.remove("selecionado");
        }
    }
    else if (prato.classList.contains("bebida")) {
        if (document.querySelector(".opcoesBebidas .selecionado") != null) {
            document.querySelector(".opcoesBebidas .selecionado").classList.remove("selecionado");
        }
    }
    else if (prato.classList.contains("sobremesa")) {
        if (document.querySelector(".opcoesSobremesas .selecionado") != null) {
            document.querySelector(".opcoesSobremesas .selecionado").classList.remove("selecionado");
        }
    }
    prato.classList.add("selecionado");
}
