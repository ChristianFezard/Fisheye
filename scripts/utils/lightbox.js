//LIGHTBOX

// creation d'une classe pour initialiser la lightbox via tous les liens photos et videos

class Lightbox {

    static init(){
        const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
        const gallery = links.map( link => link.getAttribute('href'));
        console.log(links);
        console.log(gallery);
            links.forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'), gallery);
            }));
    };

    constructor(url) {
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
    }


    // fermeture de la lightbox

    close (e){
        e.preventDefault();
        this.element.classList.add('closing');
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element);
        }, 500);
    };

    // image suivante

    next (e){
        e.preventDefault();
        let i = this.images.findIndex(image => image == this.url);
        if (i == this.images.length - 1) {
            i = -1;
        }
        this.loadImage(this.images[i + 1]);
    }

    // image précédente

    prev (e){
        e.preventDefault();
        let i = this.images.findIndex(image => image == this.url);
        if (i == 0) {
            i = this.images.length;
        }
        this.loadImage(this.images[i - 1]);
    }

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

    // structure HTML de la lightbox

    lightHTML (url) {
        const lightContainer = document.createElement('div');
        lightContainer.classList.add('lightbox');
        lightContainer.innerHTML = `
        <button class="lightbox_close">Fermer</button>
        <button class="lightbox_next">Suivant</button>
        <button class="lightbox_prev">Précédent</button>
        <div class="lightbox_image"></div>`;
        dom.querySelector('.lightbox_close').addEventListener('click', this.close.bind(this));
        dom.querySelector('.lightbox_next').addEventListener('click', this.next.bind(this));
        dom.querySelector('.lightbox_prev').addEventListener('click', this.prev.bind(this));
        return lightContainer;
    };

};

//initialisation de la lightbox

Lightbox.init();