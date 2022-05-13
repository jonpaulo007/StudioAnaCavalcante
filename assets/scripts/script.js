let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");
const bodyStyle = document.getElementById('body');

menuToggle.addEventListener("click", () =>{

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show =! show;

});


function reset() {
    menuSection.classList.toggle("on");
    bodyStyle.style.overflow = "initial"
}
