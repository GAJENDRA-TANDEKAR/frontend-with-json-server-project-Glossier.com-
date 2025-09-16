//   // -------------------  Nav Bar       -----------------------------
//  import navfromnavbar from "../navbar/navbarc.js"
 
//  let navbox = document.getElementById("navbox")
 
//  console.log(navfromnavbar)
 
//  navbox.innerHTML = navfromnavbar()
 
 
//  // ------------------------ footer     ---------------------------------

// import footercontentfromfooter from "../footer/footer.js"

// let footercontent = document.getElementById("footercontent")

// console.log(footercontentfromfooter)

// footercontent.innerHTML = footercontentfromfooter()
 
 
 const baseURL = "http://localhost:3000";
    const endpoint = "products";

    let filterbtn = document.getElementById("filterbtn");
    let selecttag = document.getElementById("parameter");
    let container = document.getElementById("container");

    // load products on page load
    window.onload = function() {
      filterdata();
    }

     // Filter button click
    filterbtn.addEventListener("click", filterdata);

    async function filterdata() {
      let category = selecttag.value;
      let url = `${baseURL}/${endpoint}?product_type=eyeshadow`;
      if(category) {
        url += `&category=${category}`;
      }
      let data = await fetch(url);
      let actualdata = await data.json();
      console.log(actualdata);
      abcd(actualdata);
    }

    function abcd(data) {
      container.innerHTML = ""; // clear old cards
      data.forEach(makecard);
    }

    function makecard(el) {
      let card = document.createElement("div");
      card.setAttribute("class","card");

      let product_id = document.createElement("p");
product_id.innerText = "ID: " + el.id;

      let img = document.createElement("img");
      img.src = el.api_featured_image;

      let product_name = document.createElement("h3");
      product_name.innerText = el.name;

      let brand = document.createElement("p");
      brand.innerText = "Brand: " + el.brand;

      let product_type = document.createElement("p");
      product_type.innerText = "Type: " + el.product_type;

      let category = document.createElement("p");
      category.innerText = "Category: " + el.category;

      let price = document.createElement("p");
      price.innerText = "Price: $" + el.price;

      // Add to Cart button
      let btn = document.createElement("button");
      btn.innerText = "Add to Cart";
      btn.addEventListener("click", function() {
        alert(el.name + " added to cart!");
        // Later: you can also POST to a /cart endpoint
      });

      card.append(img, product_name,product_id, brand, product_type, category, price, btn);
      container.append(card);
    }