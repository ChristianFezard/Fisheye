//LIGHTBOX

// fonction, ouverture de la lightbox via tous les liens photos et videos

function openLightbox(){
    return document.querySelector('.lightbox').style.display = "block";
}

function closeLightbox(){
    return document.querySelector('.lightbox').style.display = "none";
}

// fonction lightbox 

function lightBox(contentArray, mediaIndex){

    const mediaClicked = contentArray[mediaIndex]; 

    openLightbox();  
    lightHTML(mediaClicked);

    // assignation de focntion a chaque flêche

    const arrows = document.querySelectorAll('#arrows');
    arrows.forEach((arrow)=>{
        arrow.addEventListener("click", ()=>{
            if(arrow.classList.contains("lightbox_next") === true){
                return next();
            }
                return prev();
        });
    });

    // fermeture via la croix

    document.querySelector('.lightbox_close').addEventListener('click', closeLightbox);

    // image suivante

    function next(){
        
        const title = document.querySelector('.lightbox_media_title').textContent;
        
        const nIndex = contentArray.findIndex((media)=>{
            return media.title === title;
        });

        if (nIndex < contentArray.length - 1) {
            return lightHTML(contentArray[nIndex + 1]);
        }
        return false;
    }

    // image précédente

    function prev(){
        const title = document.querySelector('.lightbox_media_title').textContent;
        const nIndex = contentArray.findIndex((media)=>{
            return media.title === title;
        });
        
        if (nIndex > 0){
            return lightHTML(contentArray[nIndex - 1]);
        }
        return false;
    }

    // Gestion au clavier

    document.addEventListener("keydown", (event)=>{
        if(event.key === "Escape"){
            return closeLightbox();
        }
        if(event.key === "ArrowRight"){
            return next();
        }
        if(event.key === "ArrowLeft"){
            return prev();
        }
    });

    // structure HTML de la lightbox

    function lightHTML (media) {
        const lightContainer = document.querySelector('.lightbox_content');
        lightContainer.innerHTML = `
        <div class="lightbox_image">
        ${mediasFactory(media)}
        </div>
        <div class="lightbox_media_title">${media.title}</div>
        `;
        if(media.video !== undefined){
            const lightImage = document.querySelector(".lightbox_image");
            lightImage.querySelector('#lightbox_video').setAttribute("controls", true);
        }
        return false;
    }
}
