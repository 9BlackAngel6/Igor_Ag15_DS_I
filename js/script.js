// Atualização automática do ano
document.getElementById("ano").textContent =
    new Date().getFullYear();

// Animações ao navegar pela página
const elementos = document.querySelectorAll(
    ".secao, .cartao, .habilidades span"
);

elementos.forEach((elemento) => {
    elemento.classList.add("revelar");
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});

console.log("Portfólio carregado com sucesso!");
