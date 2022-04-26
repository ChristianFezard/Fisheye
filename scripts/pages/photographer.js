//Mettre le code JavaScript lié à la page photographer.html

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `Front-End-Fisheye/assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const spanQuote = document.createElement( 'span' );
        const spanCity = document.createElement( 'span' );
        const spanPrice = document.createElement( 'span' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        spanQuote.textContent = tagline;
        spanCity.textContent = city+", "+country;
        spanPrice.textContent = price+"€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(spanCity);
        article.appendChild(spanQuote);
        article.appendChild(spanPrice);
        spanCity.classList.add("city");
        spanPrice.classList.add("price");
        return (article);
    }
    return { name, picture, getUserCardDOM }
}