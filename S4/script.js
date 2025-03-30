document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.details').forEach(el => el.style.display = 'none');
});

function showDetails(id) {
    document.getElementById("menu-section").style.display = "none";
    document.querySelectorAll(".details").forEach(el => el.style.display = "none");
    document.getElementById(id).style.display = "block"; 
}

function showMenu() {
    document.getElementById("menu-section").style.display = "grid";
    document.querySelectorAll(".details").forEach(el => el.style.display = "none");
}