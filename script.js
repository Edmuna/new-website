var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("visible")
});

const form = document.getElementById('myForm');
const sender = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");
const submitButton = document.querySelector(".btn"); // Select the submit button

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
        sender: sender.value,
        email: email.value,
        message: msg.value,
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.send('service_90nreuh', 'template_wle2anc', templateParams, "1iqi5gSawssZ1Xp36")
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text, response, templateParams);
            sender.value = "";
            email.value = "";
            msg.value = "";
            submitButton.textContent = "Message Sent!";
        })
        .catch(function (error) {
            console.log('FAILED...', error);
            submitButton.textContent = "Error Sending Message";
        })
        .finally(function () {
            submitButton.disabled = false;
        });
});
