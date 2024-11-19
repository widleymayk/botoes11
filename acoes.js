function registrarMensagem(mensagem) {
    const saida = document.getElementById('saída');
    // Adiciona uma nova mensagem ao final do conteúdo existente
    saida.innerHTML += `<p>${mensagem}</p>`;
}

// Função acionada pelo botão "Ação 1"
function acao1() {
    registrarMensagem("Você clicou no botão Ação 1!");
}

// Função acionada pelo botão "Ação 2"
function acao2() {
    registrarMensagem("Você clicou no botão Ação 2!");
}

// Função acionada pelo botão "Ação 3"
function acao3() {
    registrarMensagem("Você clicou no botão Ação 3!");
}

// Função acionada pelo botão "Ação 4"
function acao4() {
    registrarMensagem("Você clicou no botão Ação 4!");
}