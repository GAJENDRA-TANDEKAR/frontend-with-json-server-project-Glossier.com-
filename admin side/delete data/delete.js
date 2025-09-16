let delete_product_ID = document.getElementById("delete_product_ID")

let product_delete_Button = document.getElementById("product_delete_Button")
    product_delete_Button.addEventListener("click",delete_product)

async function delete_product() {
        
    try{
        await fetch(`http://localhost:3000/products/${delete_product_ID.value}`,{
            method:"DELETE"
        })

        alert(" product item  deleted  successfully ")

    }catch(error){
        alert("entered id was wrong enter correct id")
    }
}





