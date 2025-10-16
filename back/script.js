function validarFormulario(event) {
  event.preventDefault();

  const campoNome = document.getElementById("nome");
  const valorNome = campoNome.value.trim();
  const divMensagem = document.getElementById("mensagem");

  if (valorNome === "") {
    alert("Erro: Por favor, preencha o campo nome.");
    divMensagem.className = "mensagem erro";
    divMensagem.textContent = "Por favor, preencha o campo nome.";
    divMensagem.style.display = "block";
    return false;
  } else {
    alert("Sucesso: Nome enviado com sucesso!");
    divMensagem.className = "mensagem sucesso";
    divMensagem.textContent = "Nome enviado com sucesso!";
    divMensagem.style.display = "block";

    console.log("Nome enviado:", valorNome);

    setTimeout(() => {
      campoNome.value = "";
      divMensagem.style.display = "none";
    }, 2000);

    return true;
  }
}
