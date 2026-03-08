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

window.scrollTo({
top:0,
behavior:"smooth"
});

});