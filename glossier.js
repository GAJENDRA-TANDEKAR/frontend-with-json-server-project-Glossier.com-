// -------------------  Nav Bar       -----------------------------
import navfromnavbar from"./components/navbar/navbarc.js"

let navbox = document.getElementById("navbox")

console.log(navfromnavbar)

navbox.innerHTML = navfromnavbar()


// ---------------------   Card Slider  ----------------------------

import cardsliderfromcardslider from"./components/cardslider/cardslider.js"

let cardslider = document.getElementById("cardslider")

console.log(cardsliderfromcardslider)

cardslider.innerHTML = cardsliderfromcardslider()



// ---------------------   index-video-content   ---------------------

import  videocontentfromindex from "./components/indexvideocontent/indexvid.js"

let indexvideocontent = document.getElementById("indexvideocontent")

console.log(videocontentfromindex)

indexvideocontent.innerHTML = videocontentfromindex()


// ------------------------ footer     ---------------------------------

import footercontentfromfooter from "./components/footer/footer.js"

let footercontent = document.getElementById("footercontent")

console.log(footercontentfromfooter)

footercontent.innerHTML = footercontentfromfooter()
