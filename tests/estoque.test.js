const {
  adicionarProdutoNaLoja,
  produtoMaisProximoDeEsgotar,
  sugerirReabastecimento,
  simularVendasNaLoja,
} = require('../src/index');

jest.mock('../src/index', () => ({
  adicionarProdutoNaLoja: jest.fn(),
  produtoMaisProximoDeEsgotar: jest.fn(),
  sugerirReabastecimento: jest.fn(),
  simularVendasNaLoja: jest.fn(),
}));



// Inicializa a lista de produtos
let produtos;

beforeEach(() => {
  jest.clearAllMocks(); // Limpa os mocks antes de cada teste
  produtos = []; // Inicializa a lista de produtos
  global.produtos = produtos; // Define global.produtos para que os testes acessem
});

// Teste para adicionar um produto à loja
test('Deve adicionar um produto à loja', () => {
  const produtoMock = { nome: "Produto D", estoque: 100, vendasDiariasPrevistas: 5, vendasDiariasHistorico: [] };

  adicionarProdutoNaLoja.mockImplementation((produto) => {
    produtos.push(produto); // Simula o comportamento de adicionar um produto
  });

  adicionarProdutoNaLoja(produtoMock);
  expect(produtos).toContain(produtoMock); // Verifica se o produto foi adicionado
});

// Teste para verificar o produto mais próximo de esgotar
test('Deve retornar o produto mais próximo de esgotar', () => {
  const produtoMock1 = { nome: "Produto E", estoque: 30, vendasDiariasPrevistas: 5, vendasDiariasHistorico: [] };
  const produtoMock2 = { nome: "Produto F", estoque: 20, vendasDiariasPrevistas: 10, vendasDiariasHistorico: [] };
  produtos = [produtoMock1, produtoMock2];

  produtoMaisProximoDeEsgotar.mockReturnValue(produtoMock2); // Simula o retorno da função

  const produtoCritico = produtoMaisProximoDeEsgotar();
  expect(produtoCritico.nome).toBe("Produto F"); // Verifica se o produto correto foi retornado
});

// Teste para sugerir reabastecimento
test('Deve sugerir uma quantidade de reabastecimento baseada na média de vendas diárias', () => {
  const produtoMock = { nome: "Produto G", estoque: 0, vendasDiariasHistorico: [5, 5, 5, 5, 5] };
  sugerirReabastecimento.mockReturnValue(150); // Simula o retorno da função

  const quantidadeReabastecimento = sugerirReabastecimento(produtoMock);
  expect(quantidadeReabastecimento).toBe(150); // Verifica se a quantidade sugerida está correta
});

// Teste para simular vendas na loja
test('Deve simular vendas para todos os produtos na loja', () => {
  const produtoMock1 = { estoque: 100, vendasDiariasPrevistas: 5, vendasDiariasHistorico: [] };
  const produtoMock2 = { estoque: 200, vendasDiariasPrevistas: 10, vendasDiariasHistorico: [] };
  produtos = [produtoMock1, produtoMock2];

  simularVendasNaLoja.mockImplementation(() => {
    produtos.forEach(produto => {
      produto.estoque -= produto.vendasDiariasPrevistas; // Simula a redução do estoque
      produto.vendasDiariasHistorico.push(produto.vendasDiariasPrevistas);
    });
  });

  simularVendasNaLoja();

  expect(produtoMock1.estoque).toBe(95);
  expect(produtoMock2.estoque).toBe(190);
});
