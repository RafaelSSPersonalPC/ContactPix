function copiarCodigoPix() {
    var codigoPix = "00020126400014br.gov.bcb.pix0111609839141680203Pix5204000053039865802BR5923RAFAEL SATOSHI SIRAHATA6011TRES LAGOAS62290525mNzv4J927W8bZPvEj23GbLQuI63042FF7";
    navigator.clipboard.writeText(codigoPix)
    .then(() => {
        var botao = document.getElementById("botaoCopiar");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "Copiar QR Code  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

function copiarChavePix() {
    var ChavePix = "60983914168";
    navigator.clipboard.writeText(ChavePix)
    .then(() => {
        var botao = document.getElementById("CopiarPix");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "609.839.141.68  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
