function toggleInfo(tipo) {

    const elemento = document.getElementById(
        tipo === "cliente" ? "infoCliente" :
        tipo === "usuario" ? "infoUsuario" :
        "infoInvestigacion"
    );

    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}

/* Animación al hacer scroll */

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

console.log("Versión PRO cargada correctamente.");
