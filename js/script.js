 // import { products } from "./products.js";  // <== importare la lista prodotti in modo locale

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute("id", idProduct);
  

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  product.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    productList.find((product) => PerformanceObserverEntryList(e.currentTarget.id)== product.id);

  })
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

// fetch("https://fakestoreapi.com/products") // <== importare la lista prodotti in modo remoto
  //.then((response) => response.json())
  // .then((data) => {
    //products = data;
    //renderProducts();
  //}); 




function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price, product.id);
  });
}

const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  getProductsList = data;
  
  return renderProducts(data);

};

const wrapperProducts = document.querySelector(".wrapper__products");
const cartList = [];
let productList = [];


getProductsList();

const images = [
  "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"

];

const slider = document.querySelector(".overlay");

let imagesIndex = 0;
let changeImages = setInterval(() => {
  slider.style.backgroundImage = `url(${images[imagesIndex]})`;

  if( imagesIndex < images.length -1  ) {
    imagesIndex++;
  } else {
    imagesIndex = 0;
  }
}, 2000);