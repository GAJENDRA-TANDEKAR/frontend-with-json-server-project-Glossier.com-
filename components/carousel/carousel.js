
let arr=[
    "https://i.pinimg.com/1200x/3e/28/d1/3e28d13288fe3432e02122b2c72be6eb.jpg",
    "https://sru-content.s3.ap-south-1.amazonaws.com/article/764627fd-6c8f-2b8f-1509-e4459a80950d/content/e26c4f3c-6938-4344-87a3-4d1ee32f1a87.jpg",
    "https://cdn.prod.website-files.com/5dfd2203d08cf403964198c2/62bb23e97b968d56f4563ff1_60059fe0d551d8c58ee5dffb_Glossier-Success-Story-Blog-Header-1920x1080.png",
    "https://i.redd.it/moul1v94zkw61.png",
    "https://www.glossy.co/wp-content/uploads/sites/4/2018/01/where-to-buy-glossier-in-philippines-3-e1602701853522.jpg?w=1140&h=600&crop=1",
    "https://static.independent.co.uk/2023/05/04/11/glossier%20indybest.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp"
]
let i=0
let box=document.getElementById("box")
let nextbtn=document.getElementById("next")
    nextbtn.addEventListener("click",changeNext)
    nextbtn.addEventListener("click",hault)

let prevbtn=document.getElementById("prev")
    prevbtn.addEventListener("click",changePrev)
      prevbtn.addEventListener("click",hault)

appendImg(i)



function appendImg(q){
  let img=document.createElement("img")
    img.src=arr[q]
    box.innerHTML=""
    box.append(img)
}

function changeNext(){
  i++
  i= i>=arr.length ? 0 : i
     console.log(i)
  appendImg(i)
  
}

function changePrev(){
 i--
   i= i<=-1 ? arr.length-1 : i
 appendImg(i)
   console.log(i)
}




let ref=true
let id
function timerprod(){
 
 id =setInterval(function(){
    changeNext()
} ,3000)
  ref=false
}
timerprod()


function hault(){
 console.log("hault")   
 clearInterval(id)
 if(ref==false){
     setTimeout(function(){
     timerprod()
      },5000)
      ref=true
 }



}