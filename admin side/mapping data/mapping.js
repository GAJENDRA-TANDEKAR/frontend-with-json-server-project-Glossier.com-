let container=document.getElementById("container")
async function getdata(){

    try{
        
         let data= await fetch("http://localhost:3000/products")
         let actualdata= await data.json()
         console.log(actualdata)
         makeacard(actualdata)
    }
    catch{
         
        let img=document.createElement("img")
            img.src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959261-3299960.gif"
         container.append(img)


    }  



}

getdata()


function makeacard (actualdata){

actualdata.forEach(function(el,i,arr){


    let card=document.createElement("div")
        card.setAttribute("class","card")

        card.setAttribute("value",el.id) 

    let img=document.createElement("img")
        img.src=el.api_featured_image
        
    let id=document.createElement("h2")
        id.innerText=el.id

    let product_name=document.createElement("h1")
        product_name.innerText=el.name
    
    let brand=document.createElement("h3")
        brand.innerText=el.brand 
        
    let product_type=document.createElement("h3")
        product_type.innerText=el.product_type

    let category=document.createElement("h3")
        category.innerText=el.category

    let price=document.createElement("h2")
        price.innerText=el.price

    let rating=document.createElement("h2")
        rating.innerText=el.rating

    let description=document.createElement("span")
        description.innerText=el.description




        console.log(card)

        card.append(img , id , product_name , brand , product_type , category , price ,rating  )
       container.append(card)

 })


} 

