const sections = document.querySelectorAll(".section");


function showSection(sectionId)
{

sections.forEach(section => {
section.classList.remove("active");
});

document.getElementById(sectionId).classList.add("active");

}