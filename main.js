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

const button = document.getElementById('desk-delegar');
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
const button2 = document.getElementById('mob-delegar');
        button2.addEventListener('click', (event) => {
            if (button2.innerHTML === "Dark") {
                document.documentElement.style.setProperty('--color1', '#000000');
                document.documentElement.style.setProperty('--color2', '#FFFFFF');
                button2.innerHTML = "Light";
            } else {
                document.documentElement.style.setProperty('--color1', '#FFFFFF');
                document.documentElement.style.setProperty('--color2', '#000000');
                button2.innerHTML = "Dark";
            }
});

const synopsis = document.getElementById('syno');
const synopsis_content = document.getElementById('syno-content');
synopsis.addEventListener('click', (event) => {
    if(synopsis_content.style.display == "none"){
        synopsis_content.style.display = 'block';
    }
    else{
        synopsis_content.style.display = 'none';
    }
});

const cas = document.getElementById('cas');
const cas_content = document.getElementById('cas-content');
cas.addEventListener('click', (event) => {
    if(cas_content.style.display == "none"){
       cas_content.style.display = 'block';
    }
    else{
        cas_content.style.display = 'none';
    }
});
document.getElementById('btn-back').addEventListener('click' , () => {
    window.history.go(-1);
});