import { recensioni } from "./recensioni.js";

function setCartProductsNum() {
  cartProductsNum.textContent = `Numero prodotti: ${cartList.length}`;
}

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute("id", idProduct);

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  product.addEventListener("click", (e) => {
    console.log("cartList");
    const localStorageValue = localStorage.getItem("totCartitems");
    if (localStorageValue) {
      cartList = JSON.parse(localStorageValue);
    }

    cartList.push(
      productsList.find(
        (product) => parseInt(e.currentTarget.id) === product.id
      )
    );
    setCartProductsNum();
    alert(`Prodotto aggiunto al carrello, numero prodotti: ${cartList.length}`);
    // Nel caso in cui volessimo aggiungere una interazione col LocalStorage
      //console.log(cartList);
    localStorage.setItem("totCartitems", JSON.stringify(cartList));

    // console.log("LOCAL STORAGE ==>", localStorageValue);
  });
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(
      wrapperProducts,
      product.image,
      product.title,
      product.price,
      product.id
    );
  });
}

// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  productsList = data;

  // Nella eventualità di aggiungere una quantità per prodotto
  // productsList = data.map((product) => {
  //   product.quantity = 0;
  //   return product;
  // });

  return renderProducts(data);
};

let productsList = [];
const wrapperProducts = document.querySelector(".wrapper__products");

// Parte inerente alla logica del carrello
let cartList = [];

const localStorageTot = localStorage.getItem("totCartitems");
const cartBtn = document.querySelector(".cartBtn");
const cartProductsNum = document.querySelector(".cartProductsNum");
const clearCartBtn = document.querySelector(".clearCart");

// Flusso generale
const parsedTotCardItemsLen = 0;
 // JSON.parse(localStorage.getItem("totCartitems"))?.length || 0;

cartProductsNum.textContent = `Numero prodotti: ${parsedTotCardItemsLen || 0}`;
getProductsList();

clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  setCartProductsNum();
});


///////// recensioni


function createRecensione(parent, photoUrl, nameRecensione, rateRecensione, descriptionRecensione,) {
  const recensione = document.createElement("div");
  recensione.className = "recensione";

  createPhoto(recensione, photoUrl);
  createName(recensione, nameRecensione);
  createRating(recensione, rateRecensione);
  createDescription(recensione, descriptionRecensione);
  parent.appendChild(recensione);
  
}
function createPhoto(parent, photoUrl){
  const photo = document.createElement("img");
  photo.src = photoUrl;
  parent.appendChild(photo);
}
function createName(parent, nameRecensione) {
  const name =document.createElement("h4");
  name.textContent = nameRecensione;
  parent.appendChild(name);
}

function createRating(parent, rateRecensione) {
  const rate = document.createElement("strong");
  rate.textContent = rateRecensione;
  parent.append(rate);
}

function createDescription(parent, descriptionRecensione) {
  const description = document.createElement("p");
  description.textContent = descriptionRecensione;
  parent.append(description);
}
const wrapperRecensioni = document.querySelector(".recensioni")
function renderRecensioni(listRecensioni) {
 listRecensioni.map((recensione) => {
  createRecensione(
  wrapperRecensioni,
  recensione.photo,
  recensione.name,
  recensione.rate,
  recensione.description
  );
  });
  
}

renderRecensioni(recensioni);



