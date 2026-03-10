const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item");
const footerNavItems = document.querySelectorAll(".footer-nav-item");

function showSection(sectionId){
    sections.forEach(section=>{
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    // scroll back to top
    window.scrollTo(0,0);
}

function updateActiveNavItem(sectionId){
    navItems.forEach(item=>{
        item.classList.remove("active");
        if(item.dataset.section === sectionId){
            item.classList.add("active");
        }
    });
}

navItems.forEach(item=>{
    item.addEventListener("click", function(){
        const section = this.dataset.section;
        showSection(section);
        updateActiveNavItem(section);
    });
});

footerNavItems.forEach(item=>{
    item.addEventListener("click", function(){
        const section = this.dataset.section;
        showSection(section);
        updateActiveNavItem(section);
    });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        backToTop.style.display = "flex";
    }
    else{
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

// Typewriter Effect
const text = "Hello,\n I'm Minh Quan!";
const typeCursor = document.getElementById("typeCursor");
const textEl = document.getElementById("typewriter");
let idx = 1;

function typeWriter(){
    textEl.innerText = text.slice(0, idx) + "|";
    idx++; 
    if(idx > text.length){
        idx = 1;
    }

    let randomDelay = Math.random() * 200 + 100; // Random delay between 100ms and 300ms
    setTimeout(typeWriter, randomDelay);
}

typeWriter();

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    revealElements.forEach(el=>{
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - revealPoint){
            el.classList.add("active");
        }
        else{
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);