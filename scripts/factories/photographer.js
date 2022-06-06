function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/images/Sample Photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${id}`);
        const img = document.createElement( 'img' );
        img.setAttribute("alt", name);
        const spanQuote = document.createElement( 'span' );
        const spanCity = document.createElement( 'span' );
        const spanPrice = document.createElement( 'span' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        spanQuote.textContent = tagline;
        spanCity.textContent = city+", "+country;
        spanPrice.textContent = price+"€/jour";
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(spanCity);
        article.appendChild(spanQuote);
        article.appendChild(spanPrice);
        spanCity.classList.add("city");
        spanPrice.classList.add("price");
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

    