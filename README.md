
# 🚀 Introdução ao Desafio

Neste desafio, você colocará à prova seus conhecimentos sobre funções e testes unitários. O objetivo é implementar diversas funções no arquivo `src/index.js` e garantir que todas elas sejam devidamente testadas através de testes unitários no arquivo  `__tests__/index.test.js`.

Além de testar suas habilidades em programação, este desafio apresenta desafios extras de configuração do projeto, pois o ambiente inicial não possui um `package.json` pré-configurado e também não inclui scripts automáticos. Como desenvolvedor, você será responsável por configurar todo o ambiente de testes do zero. Isso inclui:

- Criar e configurar o arquivo package.json.
  
- Instalar e configurar o Jest para realizar os testes unitários.
  
- Criar scripts no package.json para facilitar a execução dos testes e do projeto.
  
Esses passos são essenciais para desenvolver um ambiente de trabalho eficiente e garantir que suas funções estejam cobertas por testes automatizados. 
##### Essa configuração é uma prática comum no dia a dia de desenvolvedores e te prepara para lidar com projetos desde o início, compreendendo como construir o ecossistema de testes do zero.

#### Desafio: Sistema de Previsão de Estoque de Produtos em uma Loja 
<img src="https://github.com/user-attachments/assets/9b741993-9c1d-4f82-ae6a-46c597a0e6e8" alt="Estoque parado nunca mais moderno azul instagram post" width="300"/>

Você está desenvolvendo um sistema de previsão de estoque para uma loja que vende diferentes tipos de produtos. O objetivo do sistema é prever quando um produto ficará fora de estoque e sugerir uma quantidade adequada para reabastecimento.

##### Requisitos Funcionais:
- Produtos:

Cada produto é representado por um objeto contendo nome, preço, quantidade atual em estoque, e uma taxa de venda diária (número de unidades vendidas por dia).
Deve haver funções para atualizar o estoque e calcular quanto tempo resta até o produto ficar fora de estoque com base na taxa de venda.
- Loja:

 A loja é um array de produtos.
Deve haver uma função para verificar qual produto está mais próximo de ficar sem estoque.
Deve haver uma função para sugerir uma quantidade de reabastecimento com base no histórico de vendas (simulado).

- Simulação de Histórico de Vendas:

Deve ser criada uma função que simula 30 dias de vendas para cada produto, usando uma variável de taxa de vendas diárias. O estoque de cada produto deve ser atualizado diariamente.
  
Teste com Jest:

- Testes unitários devem ser criados para garantir que as funções do sistema funcionem corretamente.


## Instruções

### 1. Fork do Repositório

   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.

     
#### Como forkar?

[Link como fazer Fork](https://github.com/campinho-digital/Como-fazer-um-Fork)

### 2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


### 3. Instalar Dependências

 Seu projeto ainda não tem um arquivo package.json, você precisa criá-lo. Sem ele, você não poderá instalar dependências como o `Jest`, nem utilizar comandos importantes como npm test para rodar seus testes.


Para criar um arquivo `package.json`, você deve iniciar seu projeto `Node.js` Para isso, siga os seguintes passos:

Abra o terminal na pasta do seu projeto.

Execute o seguinte comando para iniciar o projeto Node.js:

~~~javascript
npm init -y
~~~

Esse comando cria automaticamente o arquivo package.json com as configurações padrões. O flag -y faz com que todas as perguntas interativas sejam respondidas automaticamente, preenchendo o arquivo com valores padrão (você pode editá-los depois, se necessário).

O que o npm init faz?
Quando você executa npm `init -y`, ele gera um arquivo package.json com informações básicas como:
Nome do projeto
Versão
Descrição (opcional)
Entrada principal do projeto (index.js, por exemplo)
Scripts (como o comando npm test)
Dependências e dependências de desenvolvimento
Exemplo de um arquivo package.json gerado:

~~~json

{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Projeto de previsão de estoque com Jest",
  "main": "src/index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.0.0"
  }
}

~~~



### 4. Abrir o Arquivo index.js
Abra seu editor de código preferido (por exemplo, Visual Studio Code).
No editor, abra o arquivo `index.js` que está no repositório.

- Cada participante deverá responder individualmente às questões propostas no arquivo `index.js`
- Lembre-se de sempre comentar o código respondido para explicar o que está sendo feito.
- Para cada questão, remova o comentário do console.log() relacionado àquela questão. Isso ajudará a testar e debugar o código.


### 5. Rodando o projeto
No arquivo `package.json` de um projeto `Node.js`, os scripts são comandos que você pode definir para automatizar tarefas. Eles são extremamente úteis porque permitem rodar comandos pré-configurados de forma simples, sem precisar digitar comandos longos ou lembrar de todas as opções e parâmetros.

Por exemplo, em vez de rodar um comando como node `src/index.js` manualmente toda vez, você pode definir um script que faz isso automaticamente com um comando mais simples, como npm start.

Como criar scripts no `package.json`?
Você define os scripts na seção "scripts" do `package.json`. O npm permite que você execute qualquer comando configurado nessa seção com o prefixo npm run.

Aqui está um exemplo básico de como adicionar scripts no package.json:
~~~json
 {
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Projeto de previsão de estoque com Jest",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",  // Comando para iniciar o projeto
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.0.0",
    "nodemon": "^2.0.0"
  }
}

~~~
`start`: Este é o script padrão para rodar o projeto. Quando você executa npm start, o comando definido aqui (node src/index.js) será executado, iniciando o projeto. Não é necessário o prefixo run para este script específico, ou seja, você pode apenas digitar npm start.

### 6. Configurando seu código com o  `Jest`
Instale o Jest como uma dependência de desenvolvimento no seu projeto. Isso permitirá que você use o Jest para rodar testes, sem incluir essa biblioteca no pacote final.

No terminal, execute o seguinte comando:

~~~javascript
npm install --save-dev jest
~~~

   - Escreva suas funções no arquivo src/index.js.
  ##### Todas as funções devem ser corretamente exportadas usando module.exports. Este é o arquivo onde você implementará as funcionalidades solicitadas.


#### Estrutura do projeto
 ~~~javascript

├── src
│   └── index.js        # Arquivo onde você implementará suas funções
├── __tests__           # Pasta contendo seus testes unitários
│   └── index.test.js   # Arquivo de testes
├── package.json        # Arquivo de configuração do projeto Node
└── jest.config.js      # Arquivo de configuração do Jest

~~~

##### jest.config.js 
Para garantir que o Jest saiba onde procurar seus testes e tenha o ambiente configurado corretamente, você pode criar um arquivo de configuração para o Jest chamado jest.config.js no diretório raiz do projeto.

Crie o arquivo jest.config.js com o seguinte conteúdo:

~~~javascript

module.exports = {
  testEnvironment: 'node',  // Define o ambiente de testes como Node.js
  testMatch: ['**/__tests__/**/*.test.js'],  // Define onde os arquivos de teste estarão localizados
  verbose: true  // Para exibir mais detalhes na saída dos testes
};

~~~


- Certifique-se de testar todas as funções que você escreveu!
Cada função que você criar no `src/index.js` deve ser testada no arquivo de teste correspondente. Se você adicionar uma nova função, certifique-se de que existe um teste para ela no arquivo de testes `__tests__/index.test.js`

Rode os testes com o Jest.
Para verificar se suas funções estão corretas crie um script para executar os testes

~~~json
 {
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Projeto de previsão de estoque com Jest",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js", 
    "test": "jest",  // Comando para iniciar o projeto
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.0.0",
    "nodemon": "^2.0.0"
  }
}
~~~

Execute o comando do script no terminal:

~~~javascript
npm test
~~~

Ao finalizar os testes você deverá ver a uma mensagem informando se os seus testes passaram


### 7. Versionamento com Git
Depois de responder às questões e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

### 8. Enviar o Repositório para o Moodle

Você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.


### Links úteis


[Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

[Funções no JS](https://www.javascriptprogressivo.net/2018/12/Funcao-Parametro-Argumento-Retorno.html)

[Testes de Unidade](https://aws.amazon.com/pt/what-is/unit-testing/)

[Anatomia de um teste em JavaScript](https://gabrieluizramos.com.br/anatomia-de-um-teste-em-javascript)

[Jest Doc](https://jestjs.io/pt-BR/docs/setup-teardown#repetindo-a-configura%C3%A7%C3%A3o-para-v%C3%A1rios-testes)

[Import e export no JS](https://www.alura.com.br/artigos/como-funciona-o-import-e-export-do-javascript?srsltid=AfmBOoo-2uSgAbPe7kN4e8KPMtQFEa49Az5_2_I-WRVOL-2qHmgtA4KF)






