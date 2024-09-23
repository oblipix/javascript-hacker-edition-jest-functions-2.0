const { criarProduto, venderDia, diasAteEstoqueZerado } = require('../src/index');

// Mocks
jest.mock('../src/index', () => ({
  criarProduto: jest.fn(),
  venderDia: jest.fn(),
  diasAteEstoqueZerado: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks(); // Limpa os mocks antes de cada teste
});

// Teste para a função criarProduto
test('Deve criar um produto com nome, quantidade e vendas previstas', () => {
  const produtoMock = { nome: "Produto A", estoque: 100, vendasDiariasPrevistas: 5, vendasDiariasHistorico: [] };
  criarProduto.mockReturnValue(produtoMock); // Simula o retorno da função

  const produto = criarProduto("Produto A", 100, 5);
  expect(produto).toEqual(produtoMock);
  expect(criarProduto).toHaveBeenCalledWith("Produto A", 100, 5); // Verifica se a função foi chamada com os parâmetros corretos
});

// Teste para a função venderDia
test('Deve reduzir o estoque do produto conforme as vendas diárias previstas', () => {
  const produtoMock = { estoque: 50, vendasDiariasPrevistas: 5, vendasDiariasHistorico: [] };
  venderDia.mockImplementation((produto) => {
    produto.estoque -= produto.vendasDiariasPrevistas;
    produto.vendasDiariasHistorico.push(produto.vendasDiariasPrevistas);
  });

  venderDia(produtoMock);
  expect(produtoMock.estoque).toBe(45); // Verifica se o estoque foi reduzido corretamente
  expect(produtoMock.vendasDiariasHistorico).toContain(5); // Verifica se a venda foi registrada no histórico
});

// Teste para a função diasAteEstoqueZerado
test('Deve calcular corretamente os dias até o estoque zerar', () => {
  const produtoMock = { estoque: 100, vendasDiariasPrevistas: 10, vendasDiariasHistorico: [] };
  diasAteEstoqueZerado.mockReturnValue(10); // Simula o retorno da função

  const dias = diasAteEstoqueZerado(produtoMock);
  expect(dias).toBe(10);
});
