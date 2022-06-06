
    // fonction like de la page

    function likeMedia() {

        //Recuparation des icones coeur + la zone total des likes
    
        const hearts = document.querySelectorAll(".fas");
        console.log(totalBottomLike);
        let totalBottomLike = document.querySelector("#count");
 
        //Déclancheur de l'incrementation et de Décrémentation par clic
        
        hearts.forEach((heart)=>{
            heart.addEventListener("click", function(){
                alert("tu cliques!");
                return addlike(heart);
            });
        })

        // Acces au clavier

        document.addEventListener("keydown", (event)=>{
            if (event.key === "Enter") {
                if(event.target?.classlist[1] === ".fas"){
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