(function () {
    emailjs.init("yBd2aWly2ANTiSur5");
})();

const btnText = document.getElementById('btn-text');
const formStatus = document.getElementById('form-status');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const originalText = btnText.innerText;
    btnText.innerText = 'Sending...';

    emailjs.sendForm('service_ys22tqo', 'template_pxt0es8', this)
        .then(function () {
            btnText.innerText = 'Message Sent!';
            formStatus.innerText = "Thanks! I'll get back to you soon.";
            formStatus.className = 'form-status-success';
            document.getElementById('contact-form').reset();

            setTimeout(() => {
                btnText.innerText = originalText;
                formStatus.innerText = "";
                formStatus.className = '';
            }, 5000);
        }, function (error) {
            console.error('Email send failed:', error);
            btnText.innerText = 'Error';
            formStatus.innerText = "Something went wrong. Please email me directly.";
            formStatus.className = 'form-status-error';
        });
});
