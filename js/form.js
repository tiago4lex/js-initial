var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensErros(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  document.querySelector("#mensagens-erro").innerHTML = "";
});

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) erros.push("O nome não pode ser vazio.");
  if (paciente.peso.length == 0) erros.push("O peso não pode ser vazio.");
  if (paciente.altura.length == 0) erros.push("A altura não pode ser vazia.");
  if (paciente.gordura.length == 0) erros.push("A gordura não pode ser vazia.");
  if (!validaPeso(paciente.peso)) erros.push("Peso inválido.");
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida.");

  return erros;
}

function exibeMensagensErros(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
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

function obtemPacienteDoFormulario(form) {
  return {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };
}

function adicionaPacienteNaTabela(paciente) {
  var tabela = document.querySelector("#tabela-pacientes");
  if (!tabela) return; // Se a tabela não existir, sai da função
  tabela.appendChild(montaTr(paciente));
}

// Funções auxiliares (adicionadas para completar o código)
function validaPeso(peso) {
  return peso >= 0 && peso < 600;
}

function validaAltura(altura) {
  return altura >= 0.5 && altura < 3.0;
}

function calcularImc(peso, altura) {
  peso = Number(peso);
  altura = Number(altura);
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    return "Dados inválidos";
  }
  return (peso / (altura * altura)).toFixed(2);
}
