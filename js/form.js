var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensErros(erros);
    return;
  }

  var pacienteTr = montaTr(paciente);
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

function montaTd(dado) {
  var td = document.createElement("td");
  td.textContent = dado;
  return td;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome));
  pacienteTr.appendChild(montaTd(paciente.peso));
  pacienteTr.appendChild(montaTd(paciente.altura));
  pacienteTr.appendChild(montaTd(paciente.gordura));
  pacienteTr.appendChild(montaTd(paciente.imc));

  return pacienteTr;
}