const form = document.getElementById('form');
const sendMail = document.getElementById('emailA');

function handleSendEmail (event) {
    event.preventDefault();
    
}

form.addEventListener('submit', handleSendEmail);