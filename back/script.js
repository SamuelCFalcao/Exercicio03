function validarFormulario(event) {
  // Previne o envio padrão do formulário
  event.preventDefault();

  // Obtém o valor do campo
  const campoNome = document.getElementById("nome");
  const valorNome = campoNome.value.trim();
  const divMensagem = document.getElementById("mensagem");

  // Verifica se o campo está preenchido
  if (valorNome === "") {
    // Campo vazio
    divMensagem.className = "mensagem erro";
    divMensagem.textContent = "⚠️ O campo Nome é obrigatório!";
    divMensagem.style.display = "block";
    campoNome.focus();
    return false;
  } else {
    // Campo preenchido
    divMensagem.className = "mensagem sucesso";
    divMensagem.textContent = "✓ Formulário enviado com sucesso!";
    divMensagem.style.display = "block";

    // Aqui você poderia enviar os dados para o servidor
    console.log("Nome enviado:", valorNome);

    // Limpa o formulário após 2 segundos
    setTimeout(() => {
      campoNome.value = "";
      divMensagem.style.display = "none";
    }, 2000);

    return true;
  }
}
