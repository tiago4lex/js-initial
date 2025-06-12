var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = parseFloat(tdPeso.textContent);
  var altura = parseFloat(tdAltura.textContent);

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido para o paciente " + (i + 1));
    pesoValido = false;
    paciente.classList.add("paciente-invalido"); // Adiciona classe para estilização
  }

  if (!alturaValida) {
    console.log("Altura inválida para o paciente " + (i + 1));
    alturaValida = false;
    paciente.classList.add("paciente-invalido"); // Adiciona classe para estilização
  }

  var tdImc = paciente.querySelector(".info-imc");

  if (pesoValido && alturaValida) {
    var imc = calcularImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "IMC inválido";
  }

  function calcularImc(peso, altura) {
    if (peso <= 0 || altura <= 0) {
      return "Peso e/ou Altura inválidos!";
    }
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}

function validaPeso(peso) {
  if (peso >= 0.0 && peso < 600) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0.5 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}
