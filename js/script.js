
let listaDinamica = [];
let palavraCategoria;
let palavraSorteada;
let tentativas = 6;


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
        nome: "PICA PAU",
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

criarPalavraSecreta()
palavraTela()

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
          if(palavraSorteada[i] == " "){
            listaDinamica[i] = " "
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEsp'>"+ listaDinamica[i] + "</div>"
          }
          else {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] + "</div>"
          }
        } 
        else {
          if(palavraSorteada[i] == " "){
            listaDinamica[i] = " "
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEsp'>"+ listaDinamica[i] + "</div>"
          }
          
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("l" + letra).disabled = true
    if(tentativas > 0) {
        mudarStyleLetra("l" + letra) 
        comparaListas(letra)
    }
    palavraTela()
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#757575"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra) {
    const posi = palavraSorteada.indexOf(letra)        
    const erros = document.getElementById("erros")
    if (posi < 0) {
        tentativas--
        errosForca()
        erros.innerHTML = erros.innerHTML + letra

        if(tentativas == 0){
            modalOn("Não foi dessa vez...", "Mas sempre podemos tentar de novo! <br> A palavra era: " + palavraSorteada)
        }
    }
    else {
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listaDinamica[i] = letra
            }
        }
    }

    let vitoria = true

    for(i=0; i < palavraSorteada.length; i++) {
        if(palavraSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if(vitoria == true) {
        
        modalOn("PARABÉNS!!", "Você venceu! Até que foi divertido, não acha?")
        
        tentativas = 0
    }
}


function errosForca() {
    switch(tentativas) {
        case 5: 
        document.getElementById("forca").style.background = "url('./imgs/erros/morte (1).png')"
        break;

        case 4: 
        document.getElementById("forca").style.background = "url('./imgs/erros/morte (2).png')"
        break;

        case 3: 
        document.getElementById("forca").style.background = "url('./imgs/erros/morte (3).png')"
        break;

        case 2: 
        document.getElementById("forca").style.background = "url('./imgs/erros/morte (4).png')"
        break;

        case 1: 
        document.getElementById("forca").style.background = "url('./imgs/erros/morte (5).png')"
        break;

        case 0:
            document.getElementById("forca").style.background = "url('./imgs/erros/morte (6).png')"
            break;

        default:
            document.getElementById("forca").style.background = "url('./imgs/erros/morte.png')"
            break;
    }
}

function modalOn(titulo, mensagem){
  
  let modalTitulo = document.getElementById("exampleModalLabel")
   modalTitulo.innerText = titulo
   
   let modalBody = document.getElementById("modalBody")
   modalBody.innerHTML =  mensagem
   
    $("#myModal"  ).modal({
        show:true
    })
}

let reinicia = document.querySelector("#reiniciar")
reinicia.addEventListener("click", function(){
  location.reload();
});
