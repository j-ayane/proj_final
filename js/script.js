
let listaDinamica = [];
let palavraCategoria;
let palavraSorteada;


const palavras = [
    palavras01 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS DOMESTICOS"
    },
    palavras02 = {
        nome: "GATO",
        categoria: "ANIMAIS DOMESTICOS"
    },
    palavras03 = {
        nome: "COELHO",
        categoria: "ANIMAIS DOMESTICOS"
    },
    palavras04 = {
        nome: "PAPAGAIO",
        categoria: "ANIMAIS DOMESTICOS"
    },
    palavras05 = {
        nome: "HAMSTER",
        categoria: "ANIMAIS DOMESTICOS"
    },
    palavras06 = {
        nome: "PERA",
        categoria: "FRUTA"
    },
    palavras07 = {
        nome: "BANANA",
        categoria: "FRUTA"
    },
    palavras08 = {
        nome: "LARANJA",
        categoria: "FRUTA"
    },
    palavras09 = {
        nome: "MORANGO",
        categoria: "FRUTA"
    },
    palavras10 = {
        nome: "ABACAXI",
        categoria: "FRUTA"
    },
    palavras11 = {
        nome: "COLOMBIA",
        categoria: "PAISES DA AMERICA DO SUL"
    },
    palavras12 = {
        nome: "ARGENTINA",
        categoria: "PAISES DA AMERICA DO SUL"
    },
    palavras13 = {
        nome: "BRASIL",
        categoria: "PAISES DA AMERICA DO SUL"
    },
    palavras14 = {
        nome: "CHILE",
        categoria: "PAISES DA AMERICA DO SUL"
    },
    palavras15 = {
        nome: "VENEZUELA",
        categoria: "PAISES DA AMERICA DO SUL"
    },
    palavras16 = {
        nome: "MICHAEL JACKSON",
        categoria: "CANTOR/CANTORA"
    },
    palavras17 = {
        nome: "TAYLOR SWIFT",
        categoria: "CANTOR/CANTORA"
    },
    palavras18 = {
        nome: "RIHANNA",
        categoria: "CANTOR/CANTORA"
    },
    palavras19 = {
        nome: "BRAD PITT",
        categoria: "ATOR/ATRIZ"
    },
    palavras20 = {
        nome: "ANGELINA JOLIE",
        categoria: "ATOR/ATRIZ"
    },
    palavras21 = {
        nome: "PICA-PAU",
        categoria: "DESENHO/FILME"
    },
    palavras22 = {
        nome: "TOM E JERRY",
        categoria: "DESENHO/FILME"
    },
    palavras23 = {
        nome: "VINGADORES",
        categoria: "DESENHO/FILME"
    },
    palavras24 = {
        nome: "MATRIX",
        categoria: "DESENHO/FILME"
    },
    palavras25 = {
        nome: "MOANA",
        categoria: "DESENHO/FILME"
    },
]


function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSorteada = palavras[indexPalavra].nome;
    palavraCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSorteada)
    console.log(palavraCategoria)
}

function palavraTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraCategoria;

    const palavraTela = document.getElementById("palavra");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSorteada.length; i++){
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] + "</div>"
        } 
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {

}

criarPalavraSecreta()
palavraTela()
