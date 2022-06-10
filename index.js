const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Não...",
  "Não tenho tanta certeza.",
  "Certeza!",
  "É decididamente assim.",
  "Sem dúvidas!",
  "Cê me pegou nessa...",
  "Pergunte novamente mais tarde.", 
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora",
  "A meu ver, sim!",
  "Minhas fontes dizem que não",
  "Provavelmente",
  "Não é possível prever agora.",
  "Boa perspectiva",
  "Perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim",
  "Vixe, essa eu não sei mesmo",
  "Vai na fé!",
  "Eu não arriscaria essa",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert ("Digite sua pergunta ali abaixo, pô!")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de um tempo, 3s. 
  setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}