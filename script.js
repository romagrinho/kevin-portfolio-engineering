document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const grid = document.getElementById("portfolio-grid");
    const cards = Array.from(document.querySelectorAll(".card"));

    // Ordena os cards para que os que possuem a barra de progresso apareçam primeiro
    cards.sort((a, b) => {
        const hasProgressA = a.querySelector(".progress-container") !== null;
        const hasProgressB = b.querySelector(".progress-container") !== null;
        
        if (hasProgressA && !hasProgressB) return -1;
        if (!hasProgressA && hasProgressB) return 1;
        return 0;
    });

    // Re-append sorted cards to the grid container
    cards.forEach(card => grid.appendChild(card));

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

    // Barra de progresso para "Processos Gerenciais"
    const startDate = new Date("2025-07-01"); // Segundo semestre de 2025
    const endDate = new Date("2028-12-31");   // Segundo semestre de 2028
    const now = new Date();

    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = now.getTime() - startDate.getTime();

    let progress = 0;
    if (now >= endDate) {
        progress = 100;
    } else if (now <= startDate) {
        progress = 0;
    } else {
        progress = (elapsedDuration / totalDuration) * 100;
    }

    const progressBar = document.getElementById("progress-processos-gerenciais");
    const progressText = progressBar ? progressBar.nextElementSibling : null; // Span com 0%

    if (progressBar && progressText) {
        progressBar.style.width = `${progress.toFixed(0)}%`;
        progressText.textContent = `${progress.toFixed(0)}%`;
    }
});