let productupdate = document.getElementById("productupdateButton")
    productupdate.addEventListener("click",getupdatedetails)

let productIDdata = document.getElementById("productIDdata")


let product_update_form = document.getElementById("product_update_form")
   product_update_form.addEventListener("submit" , productupdatedetails )

    async function getupdatedetails() {

        let data = await fetch(`http://localhost:3000/products/${productIDdata.value}`)

        let realdata = await data.json()
        
        product_update_form.p_name.value     = realdata.name
        product_update_form.p_brand.value    = realdata.brand 
        product_update_form.p_type.value     = realdata.product_type
        product_update_form.p_category.value = realdata.category
        product_update_form.p_price.value    = realdata.price
        product_update_form.p_rating.value   = realdata.rating
        product_update_form.p_image.value    = realdata.api_featured_image
        product_update_form.p_description.value = realdata.description
    }


    async function productupdatedetails() {

    let  name  = product_update_form.p_name.value    
    let brand = product_update_form.p_brand.value    
    let  product_type =  product_update_form.p_type.value      
    let  category  = product_update_form.p_category.value 
    let price  = product_update_form.p_price.value    
    let rating = product_update_form.p_rating.value   
    let api_featured_image  =  product_update_form.p_image.value    
    let description =  product_update_form.p_description.value


          let obj ={
            name,
            brand,
            product_type,
            category,
            price,
            rating,
            api_featured_image,
            description
        }

         await fetch(`http://localhost:3000/products/${productIDdata.value}`,{

     method:"PATCH",
     body:JSON.stringify(obj),
     headers:{
        "Content-Type":"application/json"
     }

    })
    }