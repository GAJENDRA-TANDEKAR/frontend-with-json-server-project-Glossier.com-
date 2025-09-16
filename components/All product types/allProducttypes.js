let container = document.getElementById("container");

async function getdata() {
  try {
    let data = await fetch("http://localhost:3000/products");
    let actualdata = await data.json();
    console.log(actualdata);
    abcd(actualdata);
  } catch (error) {
    let img = document.createElement("img");
    img.src = "https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959261-3299960.gif";
    img.style.width = "400px";
    container.append(img);
  }
}

getdata();

function abcd(data) {
  container.innerHTML = ""; // clear previous
  data.forEach(makecard);
}

function makecard(el) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let product_id = document.createElement("p");
  product_id.innerText = "ID: " + el.id;

  let img = document.createElement("img");
  img.src = el.api_featured_image;

  let product_name = document.createElement("h3");
  product_name.innerText = el.name;

  let brand = document.createElement("p");
  brand.innerText = "Brand: " + (el.brand || "N/A");

  let product_type = document.createElement("p");
  product_type.innerText = "Type: " + (el.product_type || "N/A");

  let category = document.createElement("p");
  category.innerText = "Category: " + (el.category || "N/A");

  let price = document.createElement("p");
  price.innerText = "Price: $" + (el.price || "0");

  // Add to Cart button
  let btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.addEventListener("click", function () {
    alert(el.name + " added to cart!");
    // Later: you can also POST to a /cart endpoint
  });

  card.append(img, product_name, product_id, brand, product_type, category, price, btn);
  container.append(card);
}
