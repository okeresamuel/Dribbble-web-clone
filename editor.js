let btnone = document.querySelector(".proLink_one")
let btnTwo = document.querySelector(".proLink_Two")
let btnThree = document.querySelector(".teamLink_One")
let btnFour = document.querySelector(".teamLink_Two")
let btnFive = document.querySelector(".teamLink_Three")
let btnSix = document.querySelector(".teamLink_Four")
let Allbtn = [btnone, btnTwo, btnThree, btnFour, btnFive, btnSix]
for (const btns of Allbtn) {
    btns.addEventListener("mouseenter", ()=>{
      btns.style.backgroundColor="hotpink"
    })
    btns.addEventListener("mouseleave", ()=>{
        btns.style.backgroundColor=""
      })
}
// open and shut for menu
let menuIcon = document.querySelector(".menu_icon")
let menu = document.querySelector(".nav_links_Firstgrp")
menuIcon.addEventListener("click", ()=>{
  if(menu.hasAttribute("offset")){
    menu.removeAttribute("offset")
    menuIcon.src="https://img.icons8.com/material-sharp/344/multiply.png"
    document.body.style.overflowY= "hidden"
  }else if(menu.hasAttribute("offset") != true){
   document.body.style.overflowY= ""
   menuIcon.src="https://img.icons8.com/material-outlined/344/menu--v1.png"
   menu.setAttribute("offset", "")
  }
})
