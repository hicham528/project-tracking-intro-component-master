let open_bar=document.getElementById("open_bar");
let navbar=document.querySelector(".navbar");
open_bar.onclick=()=>{
    navbar.classList.toggle("new_navbar");
    if(open_bar.src.includes("images/icon-hamburger.svg")){
        open_bar.src="images/icon-close.svg"
    }else{
        open_bar.src="images/icon-hamburger.svg"
    }
}