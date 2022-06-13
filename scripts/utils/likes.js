
// fonction like de la page

function likeMedia() {

    //Recuparation des icones coeur + la zone total des likes

    const hearts = document.querySelectorAll(".heart_media");

    let totalBottomLike = document.querySelector("#count");

    //Déclancheur de l'incrementation et de Décrémentation par clic
    
    hearts.forEach((heart)=>{
        heart.addEventListener("click", ()=>{
            return addlike(heart);
        });
    })

    // Acces au clavier

    document.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") {
            if(event.target?.classList[2] === "heart_media"){
                return addlike(event.target);
            }
        }
    });

    function addlike(heartNode){

        const likePerMedia = heartNode.previousElementSibling;

        likePerMedia.textContent = Number (likePerMedia.textContent) + 1;

        totalBottomLike.textContent = Number(totalBottomLike.textContent) + 1;
    }

}