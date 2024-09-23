// Array para armazenar os produtos na loja
let produtos = [];

// Função para criar um produto
function criarProduto(nome, quantidadeInicial, vendasDiariasPrevistas) {
  if (quantidadeInicial < 0 || vendasDiariasPrevistas < 0) {
    throw new Error("Quantidade inicial e vendas diárias previstas devem ser maiores ou iguais a zero.");
  }
  return {
    nome: nome,
    estoque: quantidadeInicial,
    vendasDiariasPrevistas: vendasDiariasPrevistas,
    vendasDiariasHistorico: []
  };
}

// Função para adicionar um produto à loja
function adicionarProdutoNaLoja(produto) {
  produtos.push(produto);
}

// Função para vender produtos por um dia e atualizar o estoque
function venderDia(produto) {
  let vendas = produto.vendasDiariasPrevistas;
  produto.estoque -= vendas;
  produto.vendasDiariasHistorico.push(vendas);
}

// Função para calcular quantos dias até o estoque zerar
function diasAteEstoqueZerado(produto) {
  if (produto.estoque <= 0) return 0;
  return Math.ceil(produto.estoque / produto.vendasDiariasPrevistas);
}

// Função para verificar qual produto está mais próximo de esgotar o estoque
function produtoMaisProximoDeEsgotar() {
  if (produtos.length === 0) return null;
  let produtoMaisCritico = produtos[0];
  produtos.forEach(produto => {
    const dias = diasAteEstoqueZerado(produto);
    if (dias < diasAteEstoqueZerado(produtoMaisCritico)) {
      produtoMaisCritico = produto;
    }
  });
  return produtoMaisCritico;
}

// Função para sugerir uma quantidade de reabastecimento com base no histórico de vendas
function sugerirReabastecimento(produto) {
  let totalVendas = produto.vendasDiariasHistorico.reduce((acc, val) => acc + val, 0);
  let mediaVendasDiarias = produto.vendasDiariasHistorico.length > 0 
      ? totalVendas / produto.vendasDiariasHistorico.length 
      : 0;
  let quantidadeSugerida = Math.ceil(mediaVendasDiarias * 30);
  return quantidadeSugerida;
}

// Função para simular vendas por 30 dias
function simularVendasPor30Dias(produto) {
  for (let i = 0; i < 30; i++) {
    venderDia(produto);
  }
}

// Função para simular as vendas para todos os produtos da loja
function simularVendasNaLoja() {
  produtos.forEach(produto => simularVendasPor30Dias(produto));
}

// --- Exemplo de uso ---
let produto1 = criarProduto("Produto A", 100, 5);
let produto2 = criarProduto("Produto B", 50, 3);
let produto3 = criarProduto("Produto C", 200, 10);

adicionarProdutoNaLoja(produto1);
adicionarProdutoNaLoja(produto2);
adicionarProdutoNaLoja(produto3);

// Simular vendas por 30 dias
simularVendasNaLoja();

// Verificar o produto mais próximo de esgotar
let produtoCritico = produtoMaisProximoDeEsgotar();
console.log("Produto mais próximo de esgotar:", produtoCritico.nome, "em", diasAteEstoqueZerado(produtoCritico), "dias.");

// Sugerir reabastecimento para o produto crítico
let quantidadeReabastecimento = sugerirReabastecimento(produtoCritico);
console.log("Quantidade sugerida para reabastecimento:", quantidadeReabastecimento);

// Exportar funções para uso externo
module.exports = {
  criarProduto,
  venderDia,
  diasAteEstoqueZerado,
  adicionarProdutoNaLoja,
  produtoMaisProximoDeEsgotar,
  sugerirReabastecimento,
  simularVendasNaLoja,
};
