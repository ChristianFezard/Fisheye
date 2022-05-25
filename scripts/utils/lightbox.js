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
                next();
            }
            if(arrow.classList.contains("lightbox_prev") === true){
                prev();
            }
            console.log(arrow.classList);
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

    // structure HTML de la lightbox

    function lightHTML (media) {
        const lightContainer = document.querySelector('.lightbox');
        lightContainer.innerHTML = `
        <button class="lightbox_close">Fermer</button>
        <button class="lightbox_next" id="arrows">Suivant</button>
        <button class="lightbox_prev" id="arrows">Précédent</button>
        <div class="lightbox_image">
        ${mediasFactory(media)}
        <div class="lightbox_media_title">${media.title}</div
        </div>`;
        if(media.video !== undefined){
            const lightImage = document.querySelector(".lightbox_image");
            lightImage.document.querySelector('#lightbox_video').setAttribute("controls", true);
        }
        return false;
    }

    // fonction accessibilité clavier

    //function controlKey (e){
        //if (e.key === 'escape'){
          //closeLightbox()
        //}
    //}

}
    /*constructor(url) {
        this.element = this.lightHTML(url);
        document.body.appendChild(this.element);
    };

    loadImage (url) {
        this.url = null;
        const image = new Image();
        const container = this.element.querySelector('.lightbox_image');
        container.innerHTML = '';
        this.url = url;
        image.src = url;
        document.addEventListener('escapeBtn', this.escapeBtn);
    };


    // fermeture de la lightbox





        // fonction au clavier

        escapeBtn (e) {
            if (e.key == 'escape') {
                this.close(e)
            } else if (e.key == 'ArrowLeft') {
                this.prev(e)
            } else if (e.key == 'ArrowRight') {
                this.next(e)
            }
        };


*/
