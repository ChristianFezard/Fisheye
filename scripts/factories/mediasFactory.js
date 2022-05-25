function mediasFactory(media){

     if(media.image !== undefined){

          return createImage(media);

     }

     return createVideo(media);

}

function createImage(data){

     return `<img class="article_media" src="/assets/images/Sample Photos/Medias/${data.image}" alt="${data.title}" />`;

}


function createVideo(data){

     return `
     
        <video class="article_media" id="lightbox_video" alt="${data.title}">
            <source src="/assets/images/Sample Photos/Medias/${data.video}" type="video/mp4">
        </video>
        
    `;

}