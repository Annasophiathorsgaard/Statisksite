const productContainer = document.querySelector(".product-container");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id")

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
.then((response) => response.json())
.then((data) => {
console.log("Fetched Data:", data);

productContainer.innerHTML = `
        <div>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
            alt="Beskrivelse af billede"
          />
          <span class="saleLabel ${data.discount && "isOnSale"}">-${data.discount}%</span>
        </div>
        <div>
                <h2>${data.productdisplayname}</h2>
        <p><strong>Categorie:</strong>${data.category}</p>
        <p><strong>Type:</strong>${data.articletype}</p>
        <p><strong>Price:</strong>${data.price},-</p>
        <div><p>Add to cart</p></div>
        </div>`
});