var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome").textContent;

      // Regex ou Expressão regular para ignorar acentos
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(tdNome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
