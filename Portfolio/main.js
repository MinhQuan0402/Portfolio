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

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
        else {
            entry.target.classList.remove("active");
        }

    });

},{
    threshold:0.2
});

reveals.forEach(el => observer.observe(el));

function fillSideText(){

    document.querySelectorAll(".scroll-text").forEach(container=>{

        container.innerHTML = "";

        const test = document.createElement("span");
        test.innerText = "HOME";
        container.appendChild(test);

        const wordHeight = test.offsetHeight;
        const stripHeight = container.closest(".home-background-roller").offsetHeight;

        container.innerHTML = "";

        const count = Math.ceil(stripHeight / wordHeight) + 3;

        for(let i=0;i<count;i++){
            const word = document.createElement("span");
            word.innerText = "HOME";
            container.appendChild(word);
        }

    });

}

fillSideText();
window.addEventListener("resize", fillSideText);


const form = document.querySelector("form");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    statusMsg.textContent = "STATUS: Sending transmission...";

    const data = new FormData(form);

    const response = await fetch(form.action,{
        method: form.method,
        body: data,
        headers:{
            'Accept':'application/json'
        }
    });

    if(response.ok){
        statusMsg.innerHTML = "STATUS: Transmission Sent <span>✓</span>";
        form.reset();

        // wait for 3 seconds before clearing the status message
        setTimeout(() => {
            statusMsg.textContent = "STATUS: Awaiting input...";
        }, 1000);
    }
    else{
        statusMsg.textContent = "STATUS: Transmission Failed";
    }

});