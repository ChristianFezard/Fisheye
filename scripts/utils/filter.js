function filterMedias(optionValue, optionArray){
    //Etablissement des effets d'action

    if(optionValue === "Date"){
        return perDate(optionArray);
    }
    if(optionValue === "Popularité"){
        return perLike(optionArray);
    }
    if(optionValue === "Titre"){
        return perTitle(optionArray);
    }

    //type de tri
    //par date
    function perDate(optionArray){
        return optionArray.sort((a, b)=>{
            return new Date(b.date) - new Date(a.date);
        });
    }

    //par popularité
    function perLike(optionArray){
        return optionArray.sort((a, b)=>{
            return Number(b.likes) - Number(a.likes);
        });
    }

    //par titre

    function perTitle(optionArray){
        return optionArray.sort((a, b)=>{
            return a.title.localeCompare(b.title);
        });
    }
}