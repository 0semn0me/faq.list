const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

document
.getElementById("openMenu")
.addEventListener("click", () => {

    sidebar.classList.add("open");
    overlay.classList.add("show");

});

document
.getElementById("closeMenu")
.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

function closeMenu(){

    sidebar.classList.remove("open");
    overlay.classList.remove("show");

}

function showPage(pageId){

    document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.remove("active");

    });

    document
    .getElementById(pageId)
    .classList.add("active");

    closeMenu();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
