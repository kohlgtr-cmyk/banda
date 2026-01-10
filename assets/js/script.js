function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

// Fecha ao clicar no X
document.querySelectorAll('.close').forEach(btn => {
    btn.onclick = function() {
        this.closest('.modal').style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Fecha ao clicar fora do modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}