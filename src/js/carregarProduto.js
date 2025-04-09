const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (produtos[id]) {
    const produto = produtos[id];

    document.getElementById("produtoImagem").src = produto.imagem;
    document.getElementById("produtoTipo").innerText = produto.tipo;
    document.getElementById("produtoNome").innerText = produto.nome;
    document.getElementById("produtoPrecoOriginal").innerText = produto.precoOriginal || "";
    document.getElementById("produtoPrecoDesconto").innerText = produto.precoDesconto;
    document.getElementById("produtoDesconto").innerText = produto.desconto || "";
    document.getElementById("produtoParcelamento").innerText = produto.parcelamento || "";
    document.getElementById("produtoDescricao").innerText = produto.descricao;

    // calcular parcelamento
    const precoCalculo = Number(produto.precoDesconto.replace("R$", "").trim().replace(",", "."));
    const parcelamento = `12x R$${(precoCalculo / 12).toFixed(2).replace(".", ",")} sem juros`;
    
    document.getElementById("produtoParcelamento").innerText = parcelamento;
    
} else {
    document.body.innerHTML = "<h1>Produto não encontrado</h1>";
}