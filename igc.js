const btnScrollToTop=document.querySelector("#btnScrollToTop");
var icon = document.getElementById("icon");


btnScrollToTop.addEventListener("click", () => {
    btnScrollToTop.classList.toggle("active");
})

btnScrollToTop.addEventListener("click" , ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src="sun.png";
    }
    else{
        icon.src="moon.png";
    }
})