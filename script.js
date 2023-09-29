var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("visible")
});

if (window.innerWidth <= 768) {
    var splide = new Splide(".splide");
    splide.mount();
} else {
    var splide = new Splide(".splide", {
        type: "loop",
        perPage: 3,
        focus: "center",
    });

    splide.mount();
}

// const form = document.getElementById('myForm');
// const sender = document.getElementById("name");
// const email = document.getElementById("email");
// const msg = document.getElementById("message");

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const templateParams = {
//         sender: sender.value,
//         email: email.value,
//         message: msg.value,
//     };

//     emailjs.send('service_90nreuh', 'template_wle2anc', templateParams, "1iqi5gSawssZ1Xp36")
//         .then(function (response) {
//             console.log('SUCCESS!', response.status, response.text, response, templateParams);
//             sender.value = "";
//             email.value = "";
//             msg.value = "";
//             // Here the content of the button should be changed or some notification that the e-mail has been succesfully sent
//         })
//         .catch(function (error) {
//             console.log('FAILED...', error);
//         });
// });

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

    // Disable the submit button while sending the email
    submitButton.disabled = true;
    submitButton.textContent = "Sending..."; // Update the button text

    emailjs.send('service_90nreuh', 'template_r0y7ias', templateParams, "1iqi5gSawssZ1Xp36")
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text, response, templateParams);
            sender.value = "";
            email.value = "";
            msg.value = "";
            // Here, you can update the button text or display a success message.
            submitButton.textContent = "Message Sent!";
        })
        .catch(function (error) {
            console.log('FAILED...', error);
            // Here, you can update the button text or display an error message.
            submitButton.textContent = "Error Sending Message";
        })
        .finally(function () {
            // Re-enable the submit button after the operation is complete
            submitButton.disabled = false;
        });
});
