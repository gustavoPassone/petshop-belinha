// Coleta os dados de todos os cards e salva no localStorage
document.addEventListener("DOMContentLoaded", () => {
    const produtos = {};
    const cards = document.querySelectorAll(".produto");

    cards.forEach(card => {
        const link = card.querySelector("a");
        const url = new URL(link.href);
        const id = url.searchParams.get("id");

        const imagem = card.querySelector("img")?.src || "";
        const tipo = card.querySelector(".produto-tipo")?.innerText || "";
        const nome = card.querySelector(".produto-nome")?.innerText || "";

        const precos = card.querySelectorAll(".produto-preco .preco");
        const precoOriginal = precos.length > 1 ? precos[0].innerText : "";
        const precoDesconto = precos.length > 1 ? precos[1].innerText : (precos[0]?.innerText || "");

        const desconto = card.querySelector(".produto-desconto h2")?.innerText || "";

        produtos[id] = {
            nome,
            imagem,
            tipo,
            precoOriginal,
            precoDesconto,
            desconto,
            descricao: "", // pode ser completado depois
        };
    });

    localStorage.setItem("produtos", JSON.stringify(produtos));
});
