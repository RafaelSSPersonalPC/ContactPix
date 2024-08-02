function copiarCodigoPix() {
    var codigoPix = "00020126360014br.gov.bcb.pix0114093724810001305204000053039865802BR5925CONTACT   PAPELARIA E INF6011Tres Lagoas610979630-000622905251HTT5986956017224599385676304CD55";
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
    var ChavePix = "09.372.481/0001-30";
    navigator.clipboard.writeText(ChavePix)
    .then(() => {
        var botao = document.getElementById("CopiarPix");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "09.372.481/0001-30  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
