function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let form = document.querySelector('#contactForm');

//Vérifier le champ Prénom

function validFirstName() {
    const firstNameValue = document.getElementById('first_name').value;
    console.log("prénom : " + firstNameValue);
    const errorFirstName = document.querySelector("#error-message-first-name");

    if(firstNameValue.length < 2) {
        return errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    errorFirstName.textContent = "";
    return true;
    };

// Vérifier le champ Nom

function validLastName() {
    const lastNameValue = document.getElementById('last_name').value;
    console.log("nom : " + lastNameValue);
    const errorLastName = document.querySelector("#error-message-last-name");
    
    if(lastNameValue.length < 2) {
        return errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    errorLastName.textContent = "";
    return true;
    };

// Vérifier le champ Email

function validEmail() {
    const email = document.getElementById("email").value;
    console.log("adresse mail : " + email);
    const errorEmail = document.querySelector("#error-message-email");
    let emailRegExp = RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    
    if(emailRegExp.test(email)) {
      errorEmail.textContent = "";
      return true;
    }
    errorEmail.textContent ='Veuillez entrer une adresse email valide.';
};

// Envoi du formulaire

form.addEventListener("submit", function(e){
    e.preventDefault();

    const checkValidFirstName = validFirstName();
    const checkValidLastName = validLastName();
    const checkValidEmail = validEmail();

    if(checkValidFirstName === true && checkValidLastName === true && checkValidEmail === true){
        alert('Message envoyé');
        return closeModal();
    }
});

// fermeture et validation au clavier

window.addEventListener("keydown",(event)=>{
    if (event.key == "Escape"){
        return closeModal();
    }
})