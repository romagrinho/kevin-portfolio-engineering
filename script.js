document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove a classe "active" de todos os botões
            filterBtns.forEach(b => b.classList.remove("active"));
            // Adiciona a classe "active" ao botão clicado
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            cards.forEach(card => {
                // Lógica de exibição com transição suave
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); // Tempo igual ao da transição CSS (se adicionada na classe card)
                }
            });
        });
    });
});