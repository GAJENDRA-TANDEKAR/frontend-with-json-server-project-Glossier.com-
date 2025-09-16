
let productForm = document.getElementById("product_insert_form")
    productForm.addEventListener("submit",getproductdetials)

    function getproductdetials(){
        event.preventDefault()
       
        let name =  productForm.p_name.value
        let brand = productForm.p_brand.value
        let product_type =  productForm.p_type.value
        let category = productForm.p_category.value
        let price = productForm.p_price.value
        let rating = productForm.p_rating.value
        let api_featured_image = productForm.p_image.value
        let description = productForm.p_description.value


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

       postProductData(obj)
        
        productForm.reset()

        console.log(obj)

    }

    async function postProductData(obj){
        try{
            await fetch('http://localhost:3000/products', {
                method:"post",
                body: JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/Json"}
            })
        }catch(error){
            console.log(error) 
        }
    }

