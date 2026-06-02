const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item");
const footerNavItems = document.querySelectorAll(".footer-nav-item");

const viewProfileBtn = document.getElementById("viewProfileBtn");
const viewTimelineBtn = document.getElementById("timelineGameBtn");

const menu = document.getElementById("main-menu");
const profile = document.getElementById("profile-ui");
const timeline = document.getElementById("timeline-game");

const backToMenuBtns = document.querySelectorAll(".back-btn");

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
    viewTimelineBtn.classList.add("hidden");
    viewProfileBtn.classList.add("loading");
    setTimeout(() => {
        loadingAnimation(viewProfileBtn, profile);
    }, 1500); // Add a small delay to ensure the loading class is applied
});

viewTimelineBtn.addEventListener("click", () => {
    viewProfileBtn.classList.add("hidden");
    viewTimelineBtn.classList.add("loading");
    setTimeout(() => {
        loadingAnimation(viewTimelineBtn, timeline);
    }, 1500); // Add a small delay to ensure the loading class is applied   
});

let progressWidth = 0;
function loadingAnimation(btn, classToShow){
    const progress = btn.querySelector(".btn-progress");
    if (progressWidth < 100)
    {
        progressWidth++;
        console.log(progressWidth);
        progress.style.width = progressWidth + "%";
        let randomDelay = Math.random() * 90 + 10; // Random delay between 10ms and 100ms
        setTimeout(() => loadingAnimation(btn, classToShow), randomDelay);
    }
    else
    {
        progress.style.width = "0%";
        menu.classList.add("hidden");
        classToShow.classList.remove("hidden");
        btn.classList.remove("loading");
        animateStats();
    }
}

backToMenuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        progressWidth = 0;
        resetProfileUI();
        resetStatsBar();
    });
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
    timeline.classList.add("hidden");

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
const world = document.querySelector(".game-world");

let x = 0;

const timelineData = [
    {
        x: 200,
        title: "2017 — Boon Lay Garden Primary",
        description: "First exposure to computers and programming.",
        achievements: [
            "Learned basic computer logic",
            "Making simple games with Scratch"
        ],
        button: {
            text: "View Projects",
            target: "projects"
        }
    },
    {
        x: 400,
        title: "2021 — Yuan Ching Secondary",
        description: "Started learning programming fundamentals.",
        achievements: [
            "Learned deeper about programming concepts",
            "Built a 2D action game in Scratch to educate about Principles of Accounting",
            "Gained passion for game development"
        ],
        button: {
            text: "View Projects",
            target: "projects"
        }
    },
    {
        x: 600,
        title: "2024 — Nanyang Polytechnic",
        description: "Enrolled in Game Development course.",
        achievements: [
            "Learned Unity Engine",
            "Built gameplay systems",
            "Worked on team projects"
        ],
        button: {
            text: "View Projects",
            target: "projects"
        }
    },
    {
        x: 800,
        title: "Game Development Growth",
        description: "Focused on core game programming.",
        achievements: [
            "Gameplay Programming",
            "Debugging & Optimization",
            "Physics Systems"
        ],
        button: {
            text: "View Skills",
            target: "skills"
        }
    }
];

timelineData.forEach(data => {

    const cp = document.createElement("div");
    cp.classList.add("checkpoint");
    cp.style.left = data.x + "px";
    cp.innerText = data.title.split("—")[0];

    world.appendChild(cp);

});

function showStory(data){

    const storyBox = document.getElementById("storyBox");

    storyBox.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>

        <div class="achievements">
            ${data.achievements.map(a => `<div>✓ ${a}</div>`).join("")}
        </div>

        <button class="story-btn" data-target="${data.button.target}">
            ▶ ${data.button.text}
        </button>
    `;

}

const step = 20;
document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight") x += step;
    if(e.key==="ArrowLeft") x -= step;

    if(x < 0) x = 0;

    const maxX = world.offsetWidth - player.offsetWidth;
    if(x > maxX) x = maxX;

    player.style.left = x + "px";

    timelineData.forEach(data => {

        if(Math.abs(x - data.x) < 15){
            showStory(data);
        }

    });

});