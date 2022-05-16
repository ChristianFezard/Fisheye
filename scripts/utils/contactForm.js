function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let form = document.querySelector('#contactForm');

//validate first name

function validFirstName() {
    const firstNameValue = document.getElementById('first_name').value;
    const errorFirstName = document.querySelector("#error-message-first-name");

    if(firstNameValue.length < 2) {
        return errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    errorFirstName.textContent = "";
    return true;
    };

// Validate last name

function validLastName() {
    const lastNameValue = document.getElementById('last_name').value;
    const errorLastName = document.querySelector("#error-message-last-name");
    
    if(lastNameValue.length < 2) {
        return errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    errorLastName.textContent = "";
    return true;
    };

// Validate Email

function validEmail() {
    const email = document.getElementById("email").value;
    const errorEmail = document.querySelector("#error-message-email");
    let emailRegExp = RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    
    if(emailRegExp.test(email)) {
      errorEmail.textContent = "";
      return true;
    }
    errorEmail.textContent ='Veuillez entrer une adresse email valide.';
};

// form submission

form.addEventListener("submit", function(e){
    e.preventDefault();

    const checkValidFirstName = validFirstName();
    const checkValidLastName = validLastName();
    const checkValidEmail = validEmail();

    if(checkValidFirstName === true && checkValidLastName === true && checkValidEmail){
        alert('Message envoyé');
    }
    alert("C'est mort!!!");
});