const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonRevelar = document.querySelector("#buttonRevelar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É Dicididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente",
  "Não é possivel prever agora.",
  "Perspectiva boa.",
  "As Perspectivas não são tão boas.",
  "sim.",
  "Concentre-se e pergunte novamente",
  "Sinais apontam que sim.",
]

// Clicar em fazer pergunta

function revelarDestino() {

  if(inputPergunta.value == "" ) {
    alert("Digite a sua Pergunta")
    return
  }

buttonRevelar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

 // gerar um numero aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

 // sumir resposta apos 4 segundos

setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonRevelar.removeAttribute("disabled")
}, 4500)
}
