// Função para obter o ID do produto da URL
function obterIdProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Função para encontrar o produto pelo ID
function encontrarProduto(id) {
    // Verificar em todas as categorias
    for (const categoria in produtosCompleto) {
        const produto = produtosCompleto[categoria].find(item => item.id === id);
        if(produto) return produto;
    }
    return null;
}

// Função para preencher os detalhes do produto
function preencherDetalhesProduto(produto) {
    if (!produto) {
        window.location.href = 'produtos.html';
        return;
    }

     // Atualizar o título da página
     document.title = `${produto.nome} - Belinha`;

    // Preencher os detalhes do produto
    document.getElementById('produtoImagem').src = produto.imagem;
    document.getElementById('produtoImagem').alt = produto.nome;
    document.getElementById('produtoImagem').alt = produto.nome;
    document.getElementById('produtoTipo').textContent = produto.tipo;
    document.getElementById('produtoNome').textContent = produto.nome;
    document.getElementById('produtoPrecoOriginal').textContent = produto.precoOriginal || "";
    document.getElementById('produtoPrecoDesconto').textContent = produto.precoDesconto;
    document.getElementById('produtoDesconto').textContent = produto.desconto || "";
    document.getElementById('produtoParcelamento').textContent = produto.parcelamento;
    document.getElementById('produtoDescricao').textContent = produto.descricao;

    // calcular parcelamento
    const precoCalculo = Number(produto.precoDesconto.replace("R$", "").trim().replace(",", "."));
    const parcelamento = `12x R$${(precoCalculo / 12).toFixed(2).replace(".", ",")} sem juros`;
    
    document.getElementById("produtoParcelamento").innerText = parcelamento;
}

// Inicializar a página quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const idProduto = obterIdProduto();
    const produto = encontrarProduto(idProduto);
    preencherDetalhesProduto(produto);
})