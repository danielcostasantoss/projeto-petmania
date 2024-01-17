const removerProdutos = document.getElementsByClassName("exProd")
for (var i = 0; i < removerProdutos.length; i++) {
    removerProdutos[i].addEventListener("click", remover)
}

function remover(event) {
    event.target.parentElement.parentElement.remove()
    calcularValor()
}

function calcularValor() {
    let totalValor = 0
    const cardProdutos = document.getElementsByClassName("cardProds")
    for (var i = 0; i < cardProdutos.length; i++) {

        const preçoProduto = cardProdutos[i].getElementsByClassName("rsProd")[0].innerText.replace("R$", "").replace(",", ".")
        const contarQuantia = cardProdutos[i].getElementsByClassName("qntd")[0].value

        totalValor = totalValor + (preçoProduto * contarQuantia)

        totalValor = totalValor.toFixed(2)
        document.querySelector(".ttProd").innerText = "R$ " + totalValor.replace(".", ",")
    }
}

const quantiaProd = document.getElementsByClassName("qntd")
for (var i = 0; i < quantiaProd.length; i++) {
    quantiaProd[i].addEventListener("change", calcularValor)
}

function adicionarLinha(event) {
    const btn = event.target
    const infoProd = btn.parentElement.parentElement
    const imgProd = infoProd.getElementsByClassName("imagem")[0].src
    const namProd = infoProd.getElementsByClassName("nome")[0].innerText
    const preProd = infoProd.getElementsByClassName("valor")[0].innerText

    const boxProd = document.getElementsByClassName("nmProd")
    for (var i = 0; i < boxProd.length; i++) {
        if (boxProd[i].innerText == namProd) {
            alert("O produto já está no carrinho!!")
            return
        }
    }

    let novaLinha = document.createElement("tr")
    novaLinha.classList.add("cardProds")

    novaLinha.innerHTML =
        `<td class="ult3"><img src="${imgProd}" class="ftProd">
        </td>
        <td class="nmProd">${namProd}</td>
        <td class="rsProd">${preProd}</td>
        <td class="qtProd">
        <input type="number" class="qntd" min="0" value="1">
        </td>
        <td class="ttProd">${preProd}</td>
        <td class="ult4"><button class="exProd">X</button></td>`

    const aparecerLinha = document.querySelector(".carmarket")
    aparecerLinha.append(novaLinha)

    novaLinha.getElementsByClassName("qntd")[0].addEventListener("change", calcularValor)
    novaLinha.getElementsByClassName("exProd")[0].addEventListener("click", remover)
}

const adicionarCarrinho = document.getElementsByClassName("btnAdc")
for (var i = 0; i < adicionarCarrinho.length; i++) {
    adicionarCarrinho[i].addEventListener("click", adicionarLinha)
}

function alertarFinal() {
    alert("Você finalizou sua compra!!")
    //window.location.replace("https://www.youtube.com")
}

const finalizarCompra = document.getElementsByClassName("feComp")
for (var i = 0; i < finalizarCompra.length; i++) {
    finalizarCompra[i].addEventListener("click", alertarFinal)
}