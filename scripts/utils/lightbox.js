//LIGHTBOX

// creation d'une classe pour initialiser la lightbox via tous les liens photos et videos

class Lightbox {

    static init(){
        const links = document.querySelectorAll('img[src$=".jpg"], video[src$=".mp4"]');
        const linksArray = Array.from(links);
        console.log(linksArray);
            links.forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'));
            }));
    };

    constructor(url) {
        const element = this.lightHTML(url);
        document.body.appendChild(element);
    };

    // structure HTML de la lightbox

    lightHTML (url) {
        const lightContainer = document.createElement('div');
        lightContainer.classList.add('lightbox');
        lightContainer.innerHTML = `
        <button class="lightbox_close">Fermer</button>
        <button class="lightbox_next">Suivant</button>
        <button class="lightbox_prev">Précédent</button>
        <div class="lightbox_image"></div>`;
        return lightContainer;
    };

};

//initialisation de la lightbox

Lightbox.init()