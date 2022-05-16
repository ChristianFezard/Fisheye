//Mettre le code JavaScript lié à la page photographer.html

document.addEventListener("DOMContentLoaded", ()=>{
      let url = document.location.search;
      const urlParams = new URLSearchParams(url);
      const urlId = urlParams.get("id");

      // Récuperation des données [photographers] et [media] 

      fetch("./data/photographers.json")
      .then((response)=>{
            return response.json();
      }).then((result)=>{
            displayPhotographerInfos(result.photographers);
            getPhotographerMedia(result.media);
      });

    // fonction récuperation du tableau [photographers] lié a l'id du photographe

      function displayPhotographerInfos(infosArray){
            const photographerInfos = infosArray.find((photographer)=>{
                   return Number(urlId) === Number(photographer.id);
            });

            // affichage des éléments de profile via DOMbuild

            const header = document.querySelector('#header');
            const description = document.querySelector('#profile');
            const nameTitle = document.createElement('h1');
            description.appendChild(nameTitle);           
            nameTitle.textContent = photographerInfos?.name;
            const location = document.createElement('p');
            description.appendChild(location);
            location.textContent = photographerInfos?.city+", "+photographerInfos?.country;
            location.classList.add("city");
            const tag = document.createElement('p');
            description.appendChild(tag);
            tag.textContent = photographerInfos?.tagline;
            const picture = `assets/images/Sample Photos/Photographers_ID_Photos/`+photographerInfos?.portrait;
            const profilePicture = document.createElement('img');
            profilePicture.setAttribute("alt", photographerInfos?.name);
            profilePicture.setAttribute("src", picture);
            header.appendChild(profilePicture);
            profilePicture.classList.add("photographer_id");

            // afficher le nom dans la modal contact

            const contactHead = document.querySelector('#contact_me');
            const contactName = document.createElement('p');
            contactHead.appendChild(contactName);
            contactName.textContent = photographerInfos?.name;
      }

    // fonction récuperation du tableau [media] lié a l'id du photographe

      function getPhotographerMedia(mediaArray){
            const photographerMedia = mediaArray.filter((media)=>{
                 return Number(urlId) === Number(media.photographerId);
            });
            return displayMedias(photographerMedia);            
      }

      // fonction affichage des [media] via DOMbuild

      function displayMedias(photographerMediaArray){
            let MEDIAHTML = "";
            photographerMediaArray.forEach((media)=>{
                 MEDIAHTML+= `               
                 <div class="media_cards">
                    ${mediasFactory(media)}
                    <div class="bottom_line">
                    <span>${media.title}</span>
                    <div class="photo_like">${media.likes}<i class="fas fa-heart"></i></div>
                    </div>
                 </div>
                 `;
            });
            document.querySelector(".media_gallery").innerHTML = MEDIAHTML;
      }

      // affichage des filtres
      
      let isOpen = false;
      const selectOptions = document.querySelector("#select-block-options");
      const firstButtonText = document.querySelector("#select-first-option-text");
      const optionsButtons = selectOptions.querySelectorAll("button");
      document.querySelector("#select-first-option").addEventListener("click", ()=>{
				if(isOpen === false){
         
             // On ouvre le faux select
             
             selectOptions.style.display = "block";            
             isOpen = true;             
             return handleButtonsOptions();        
        }       
        if(isOpen === true){        
        		 return closeSelect();       
        }
      });

        function closeSelect(){

                // On ferme le faux select
                    
            selectOptions.style.display = "none";          
            return isOpen = false;
        }

        function handleButtonsOptions(){
            optionsButtons.forEach((button)=>{               
                    button.onclick = ()=>{                  
                        const buttonText = button.textContent;                         
                        button.innerHTML = firstButtonText.textContent;                         
                        firstButtonText.innerHTML = buttonText;                                   
                        return closeSelect();               
                    };               
                });
        }
});


// fonction like 

const likeBtn = document.querySelector('.popularity');
let count = document.querySelector('#count');

let clicked = false;

likeBtn.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            count.textContent++;
        }
        clicked = false;
        count.textContent--;
});

