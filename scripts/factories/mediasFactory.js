function mediasFactory(media){

     if(media.image !== undefined){

          return createImage(media);

     }

     return createVideo(media);

}

function createImage(data){

     return `<img class="article_media" id="lightbox_picture" src="/assets/images/Sample Photos/Medias/${data.image}" tabindex="0" alt="${data.title}" data-alttxt="${data.title}"/>`;

}


function createVideo(data){

     return `
     
        <video class="article_media" id="lightbox_video" alt="${data.title}" tabindex="0" data-alttxt="${data.title}">
            <source src="/assets/images/Sample Photos/Medias/${data.video}" type="video/mp4">
        </video>
        
    `;

}