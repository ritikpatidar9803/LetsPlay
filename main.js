const nav =document.querySelector("nav");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
    }
});

const button = document.getElementById('delegar');
        button.addEventListener('click', (event) => {
            if (button.innerHTML === "Dark Mode") {
                document.documentElement.style.setProperty('--color1', '#000000');
                document.documentElement.style.setProperty('--color2', '#FFFFFF');
                button.innerHTML = "Light Mode";
            } else {
                document.documentElement.style.setProperty('--color1', '#FFFFFF');
                document.documentElement.style.setProperty('--color2', '#000000');
                button.innerHTML = "Dark Mode";
            }
});