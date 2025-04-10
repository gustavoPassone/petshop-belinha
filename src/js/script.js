let index = 0;
    function changeSlide() {
        const slides = document.querySelector(".slides");
        index = (index + 1) % document.querySelectorAll(".slide").length;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }
setInterval(changeSlide, 7000);


document.querySelectorAll(".loja").forEach((loja) => {
    loja.addEventListener("mouseenter", () => {
        document.querySelectorAll(".loja").forEach((outro) => {
            if (outro !== loja) {
                outro.style.filter = "brightness(0.85)";
            }
        });
    });

    loja.addEventListener("mouseleave", () => {
        document.querySelectorAll(".loja").forEach((outro) => {
            outro.style.filter = "brightness(1)";
        });
    });
});


const produtosDestaque = [
    {
        id: "cachorro1",
        nome: "Ração Golden Filhote Sabor Frango e Arroz",
        imagem: "src/images/produtos/ra (1).png",
        precoOriginal: "R$ 150,00",
        precoDesconto: "R$ 90,30",
        desconto: "25% OFF",
        descricao: "Alimento completo para filhotes, com sabor frango e arroz. Ideal para o crescimento saudável.",
        tipo: "Ração | +500 vendidos",
        tipoCard: "Ração"
    },
    {
        id: "gato1",
        nome: "Ração Golden Gatos Adultos Frango",
        imagem: "src/images/produtos/ra (7).png",
        precoOriginal: "R$ 20,99",
        precoDesconto: "R$ 12,40",
        desconto: "14% OFF",
        descricao: "Perfeita para cães adultos. Com carne e arroz para uma dieta equilibrada.",
        tipo: "Ração | +500 vendidos",
        tipoCard: "Ração"
    },
    {
        id: "coelho1",
        nome: "Ração Nutrópica Coelho Adulto",
        imagem: "src/images/produtos/ra (19).png",
        precoOriginal: "R$ 20,99",
        precoDesconto: "R$ 13,40",
        desconto: "40% OFF",
        descricao: "Perfeita para cães adultos. Com carne e arroz para uma dieta equilibrada.",
        tipo: "Ração | +300 vendidos",
        tipoCard: "Ração"
    },
    {
        id: "ave1",
        nome: "Nutrópica Pássaros Exóticos",
        imagem: "src/images/produtos/ra (13).png",
        precoOriginal: "R$ 20,99",
        precoDesconto: "R$ 13,10",
        desconto: "15% OFF",
        descricao: "Perfeita para cães adultos. Com carne e arroz para uma dieta equilibrada.",
        tipo: "Ração | +500 vendidos",
        tipoCard: "Ração"
    }
];


//Função criar cards de uma categoria
function criarCardProduto() {
    const grid = document.querySelector(`.produtos`);
    if (!grid) return;

    produtosDestaque.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto';

        card.innerHTML = `
            <a href="detalhes-produto.html?id=${produto.id}">
                <div class="produto-content">
                    <div class="produto-imagem">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="produto-botao">
                        <button type="button" class="btn-carrinho">Carrinho<span><i
                                    class="fas fa-plus"></i></span></button>
                        <button type="button" class="btn-comprar">Comprar <span><i
                                    class="fas fa-shopping-cart"></i></span></button>
                    </div>
                </div>

                <div class="produto-infos">
                    <div class="infos-top">
                        <h2 class="produto-tipo">${produto.tipoCard}</h2>
                        <div class="rating">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </div>
                    </div>

                    <p class="produto-nome">${item.nome}</p>
                    <div class="produto-preco">
                        <p class="preco">${item.precoOriginal}</p>
                        <p class="preco">${item.precoDesconto}</p>
                    </div>
                </div>

                 <div class="produto-desconto">
                    <h2 class="h2-pd">${item.desconto}</h2>
                </div>
            </a>
        `;

        grid.appendChild(card);
    });
}

// Iniciar
document.addEventListener('DOMContentLoaded', () => {
    criarCardProduto();
});