// Função para adicionar nova mensagem ao fórum
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura o conteúdo da mensagem
    const messageText = document.getElementById('messageInput').value;

    if (messageText.trim() !== "") {
        // Cria os elementos de mensagem
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        const messageHeader = document.createElement('div');
        messageHeader.classList.add('message-header');
        messageHeader.textContent = "Usuário";

        // Botão de deletar
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = "Deletar";
        messageHeader.appendChild(deleteBtn);

        // Corpo da mensagem
        const messageBody = document.createElement('div');
        messageBody.classList.add('message-body');
        messageBody.textContent = messageText;

        // Adicionando os elementos ao div da mensagem
        messageDiv.appendChild(messageHeader);
        messageDiv.appendChild(messageBody);

        // Adicionando a mensagem ao container
        document.getElementById('messagesContainer').prepend(messageDiv);
        
        // Limpar o campo de input após enviar
        document.getElementById('messageInput').value = "";
    }
});

// Função para deletar a mensagem
document.getElementById('messagesContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const message = event.target.closest('.message');
        message.remove();
    }
});
