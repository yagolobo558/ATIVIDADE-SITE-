//}
function aumentarfonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = tamanhoAtual + 2 + 'px';

    });
}

function diminuirfonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = tamanhoAtual - 2 + 'px';

    });
}

function contraste() {
    const body = document.body;
    const currentFilter = body.style.filter;

    if (currentFilter.includes("contrast(200%)")) {
        body.style.filter = "contrast(100%)";
    } else {
        body.style.filter = "contrast(200%)";
    }
}
