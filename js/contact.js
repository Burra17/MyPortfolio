(function () {
    // Din Public Key
    emailjs.init("yBd2aWly2ANTiSur5");
})();

const btn = document.querySelector('.submit-btn');
const btnText = document.getElementById('btn-text');
const status = document.getElementById('form-status');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const originalText = btnText.innerText;
    btnText.innerText = 'Sending...';

    // Service ID och Template ID
    emailjs.sendForm('service_ys22tqo', 'template_pxt0es8', this)
        .then(function () {
            console.log('SUCCESS!');
            btnText.innerText = 'Message Sent! 🚀';
            status.innerText = "Thanks! I'll get back to you soon.";
            status.style.color = "#22d3ee";
            document.getElementById('contact-form').reset();

            setTimeout(() => {
                btnText.innerText = originalText;
                status.innerText = "";
            }, 5000);
        }, function (error) {
            console.log('FAILED...', error);
            btnText.innerText = 'Error';
            status.innerText = "Something went wrong. Please email me directly.";
            status.style.color = "#ff4444";
        });
});