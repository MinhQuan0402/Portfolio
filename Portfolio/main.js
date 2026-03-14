const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item");
const footerNavItems = document.querySelectorAll(".footer-nav-item");

const viewProfileBtn = document.getElementById("viewProfileBtn");
const viewTimelineBtn = document.getElementById("timelineGameBtn");

const menu = document.getElementById("main-menu");
const profile = document.getElementById("profile-ui");
const timelime = document.getElementById("timeline-game");

function showSection(sectionId){
    sections.forEach(section=>{
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    // scroll back to top
    window.scrollTo(0,0);

    // if leaving about page → reset menu
    if(sectionId !== "about"){
        resetProfileUI();
        resetStatsBar();
    }
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

const textarea = document.getElementById("message");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {

    let words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0);
    let chars = textarea.value.length;

    charCount.textContent = chars;
    wordCount.textContent = words.length;

    if (chars > 0)
    {
        statusMsg.textContent = "STATUS: Typing..."
    }
    else
    {
        statusMsg.textContent = "STATUS: Awaiting input...";
    }

});

function toggleItem(item){

    item.classList.toggle("open");

}

const elements = document.querySelectorAll(
".profile-card, .timeline-item, .achievement"
);

const interactionObv = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

elements.forEach(el => interactionObv.observe(el));

viewProfileBtn.addEventListener("click", () => {
    viewProfileBtn.classList.add("loading");
    viewTimelineBtn.classList.add("hidden");

    // fake loading delay
    setTimeout(() => {
        menu.classList.add("hidden");
        profile.classList.remove("hidden");
        animateStats();
    }, 2000);

});

viewTimelineBtn.addEventListener("click", () => {
    viewTimelineBtn.classList.add("loading");
    viewProfileBtn.classList.add("hidden");

    // fake loading delay
    setTimeout(() => {
        menu.classList.add("hidden");
        timelime.classList.remove("hidden");
        animateStats();
    }, 2000);
});

function animateStats(){
    const bars = document.querySelectorAll(".progress-fill");

    let index = 0;
    bars.forEach(bar=>{
        const value = bar.dataset.width;
        setTimeout(() => {
            bar.style.width = value;
        }, 1000 + 500 * index);

        index++;
    });
}

function resetProfileUI(){
    menu.classList.remove("hidden");
    profile.classList.add("hidden");
    timelime.classList.add("hidden");

    viewProfileBtn.classList.remove("loading");
    viewTimelineBtn.classList.remove("loading");
    viewProfileBtn.classList.remove("hidden");
    viewTimelineBtn.classList.remove("hidden");
}

function resetStatsBar(){
    const bars = document.querySelectorAll(".progress-fill");

    bars.forEach(bar=>{
        bar.style.width = 0;
    });
}

const player = document.getElementById("player");
const checkpoints = document.querySelectorAll(".checkpoint");
const storyBox = document.getElementById("storyBox");

let x = 0;

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight") x+=10;
    if(e.key==="ArrowLeft") x-=10;

    player.style.left = x + "px";

    checkpoints.forEach(cp=>{

        let cpX = cp.offsetLeft;

        if(Math.abs(x - cpX) < 10){

            storyBox.innerText = cp.dataset.story;

        }

    });

});