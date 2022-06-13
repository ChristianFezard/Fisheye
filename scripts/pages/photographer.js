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
            const photographerMedias = getPhotographerMediaById(result.media);
            displayMedias(photographerMedias);
            

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
                                displayMedias((filterMedias(buttonText, photographerMedias)));                               
                                return closeSelect();               
                            };               
                        });
                }
                
                
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

            //afficher les prix des photographes

            const rate = document.querySelector('.price');
            rate.textContent = photographerInfos?.price+"€/jour";

            // afficher le nom dans la modal contact

            const contactName = document.querySelector('.photographer_name');
            contactName.textContent = photographerInfos?.name;
      }

    // fonction récuperation du tableau [media] lié a l'id du photographe

      function getPhotographerMediaById(mediaArray){
            const photographerMedia = mediaArray.filter((media)=>{
                 return Number(urlId) === Number(media.photographerId);
            });
            return photographerMedia;           
      }
      
      // fonction affichage des [media] via DOMbuild

      function displayMedias(photographerMediaArray){
            let MEDIAHTML = "";
            let sum = 0;
            photographerMediaArray.forEach((media)=>{
                 sum = Number(sum) + Number(`${media.likes}`);
                 MEDIAHTML+= `               
                 <div class="media_cards">
                    ${mediasFactory(media)}
                    <div class="bottom_line">
                    <span>${media.title}</span>
                    <div class="photo_like"><span>${media.likes}</span><i class="fas fa-heart heart_media" tabindex="0"></i></div>
                    </div>
                 </div>
                 `;
            });
            document.querySelector(".media_gallery").innerHTML = MEDIAHTML;

            // Récuperation des likes

            document.querySelector("#count").textContent = sum;

      // function like
      
      likeMedia();

      // Lightbox

            const medias = document.querySelectorAll(".article_media");
            medias.forEach((media, index)=>{
                media.addEventListener("click", ()=>{
                lightBox(photographerMediaArray, index);
                });
            });
                  //acces a la lightbox via le clavier

                  document.addEventListener("keydown", (event)=>{
                   

                    if (event.key === "Enter") {
                        
                        if(event.target?.classList[0] === "article_media"){
                            const mediaIndex = photographerMediaArray.findIndex((media)=>{
 
                                return media.title === event.target?.dataset?.alttxt;
        
                         });
        
                         
        
                                return lightBox(photographerMediaArray, mediaIndex);
        
                        }
                    }
                });
        };
        
});




