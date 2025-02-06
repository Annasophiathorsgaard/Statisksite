const listContainer = document.querySelector(".products-grid");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

fetch('https://kea-alt-del.dk/t7/api/product?category=${category}')
.then((response) => response.json())
.then((data) => showList(data));

function showList(products){
    console.log(products);
    let markup = "";
    products.map((product) => {
      markup +=
        `<article>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Beskrivelse af billede" />
            <h2>${product.productdisplayname}</h2>
            <p>${product.price},-</p>
            <p class="saleLabel ${product.discount && "isOnSale"}">-${product.discount}%</p>
            <a href="produkt.html?id=${product.id}"><p class="read_more">Read more</p></a>
            <p class="${product.soldout && "sold_out"}"></p>
        </article>`;
    })
    .join("");
    console.log(markup);
    listContainer.innerHTML = markup;
}