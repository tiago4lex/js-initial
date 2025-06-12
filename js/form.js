var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  // var nome = form.nome.value;
  // var peso = form.peso.value;
  // var altura = form.altura.value;
  // var gordura = form.gordura.value;

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensErros(erros);
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});


function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser vazio.");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser vazio.");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser vazia.");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser vazia.");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso inválido.");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida.");
  }
  return erros;
}

function exibeMensagensErros(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; // Limpa mensagens anteriores

  erros.forEach((element) => {
    var li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
}
