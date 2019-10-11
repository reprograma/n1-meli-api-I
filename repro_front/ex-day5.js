const btnEnviar = document.getElementById("inputAluna")
const nome = document.getElementById("name")
const dateOfBirth = document.getElementById("dataDeNascimento")
const checkbox = document.getElementsByName("nasceuEmSp")
const btnListar = document.getElementById("listarAlunas")
const divListagem = document.querySelector(".aluninhas")
const btnListarProfs = document.getElementById("listarProfs")

//chamadas pra API
async function request() {
  const response = await fetch("http://localhost:3000/alunas").then(data =>
    data.json()
  )
  console.log(response)
  return response
}

async function requestAluna(id) {
  const response = await fetch(`http://localhost:3000/alunas/${id} `).then(
    data => data.json()
  )
  return response
}

async function requestProfs() {
  const response = await fetch("http://localhost:3000/professoras").then(data =>
    data.json()
  )
  console.log(response)
  return response
}

async function requestProf(id) {
  const response = await fetch(`http://localhost:3000/professoras/${id}`).then(
    data => data.json()
  )
  console.log(response)
  return response
}

// fim de chamadas pra api

//interação com o DOM
async function listarAlunas() {
  const dados = await request()

  divListagem.innerHTML = ""
  dados.forEach(aluna => {
    divListagem.innerHTML += `
      <li id="${aluna.id}" onclick="getAluna(${aluna.id})"class="aluninha">Nome: ${aluna.nome}</li>
    `
  })
}

async function getAluna(id) {
  const aluna = await requestAluna(id)
  divListagem.innerHTML = ""
  divListagem.innerHTML = `
      <li class="alunaView">Nome: ${aluna.nome}</li><br>
      <li class="alunaView">Nascida em SP: ${aluna.nasceuEmSp}</li><br>
      <li class="alunaView">Data de Nascimento: ${aluna.dateOfBirth}</li>
      `
}

async function listarProfs() {
  const dados = await requestProfs()

  divListagem.innerHTML = ""
  dados.forEach(prof => {
    divListagem.innerHTML += `
      <li id="${prof.id}" onclick="getProf(${prof.id})"class="aluninha">Nome: ${prof.nome}</li>
    `
  })
}

async function getProf(id) {
  const prof = await requestProf(id)
  divListagem.innerHTML = ""
  divListagem.innerHTML = `
      <li class="alunaView">Nome: ${prof.nome}</li><br>
      <li class="alunaView">Especialidade: ${prof.especialidade}</li><br>
      <li class="alunaView">Signo: ${prof.signo}</li>
      `
}
// fim de interação como DOM

//eventos de click (eventlisterner)
btnListar.addEventListener("click", function(e) {
  e.preventDefault()
  listarAlunas()
})

btnListarProfs.addEventListener("click", function(e) {
  e.preventDefault()
  listarProfs()
})
