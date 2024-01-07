document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Simula o envio com sucesso
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Enviado com sucesso!';
        successMessage.style.color = 'green';

        const sectionContact = document.getElementById('contact');
        sectionContact.appendChild(successMessage);

        // Limpar os campos do formulário após o envio
        form.reset();

        // Remove a mensagem de sucesso após 3 segundos (3000 milissegundos)
        setTimeout(function() {
            successMessage.remove();
        }, 3000);
    });
});
