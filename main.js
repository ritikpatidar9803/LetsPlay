const nav =document.querySelector("nav");
const mobileNav =document.querySelector("nav.mobile-nav");
const menuIcon =document.querySelector(".menu-icon");
const closeIcon =document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer =document.querySelector(".mobile-menu-container");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});
closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});

const button = document.getElementById('delegar');
        button.addEventListener('click', (event) => {
            if (button.innerHTML === "Dark") {
                document.documentElement.style.setProperty('--color1', '#000000');
                document.documentElement.style.setProperty('--color2', '#FFFFFF');
                button.innerHTML = "Light";
            } else {
                document.documentElement.style.setProperty('--color1', '#FFFFFF');
                document.documentElement.style.setProperty('--color2', '#000000');
                button.innerHTML = "Dark";
            }
});