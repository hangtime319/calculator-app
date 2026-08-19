# Calculadora

Aplicação de calculadora desenvolvida com React como parte de um desafio do Frontend Mentor. O projeto possui uma interface responsiva, suporte a diferentes temas visuais e interação por teclado.

## Projeto online

Acesse a aplicação publicada no GitHub Pages:

**[Visualizar projeto](https://hangtime319.github.io/calculator-app/)**

## Funcionalidades

- Realização de operações de adição, subtração, multiplicação e divisão.
- Entrada de números decimais.
- Botão para apagar o último caractere digitado.
- Botão de reset para limpar toda a operação.
- Suporte às teclas do teclado para números, operadores, decimal, resultado, apagar e resetar.
- Exibição do valor atual, do operador selecionado e do valor anterior.
- Alternância entre três temas visuais.
- Layout responsivo para diferentes tamanhos de tela.
- Interface baseada no design proposto pelo desafio.

## Tecnologias utilizadas

- React 19
- Vite
- JavaScript (ES Modules)
- Tailwind CSS 4
- Plugin Tailwind CSS para Vite
- ESLint

## Organização do projeto

- `src/components`: componentes da calculadora, display, teclado, cabeçalho e controle de tema.
- `src/hooks`: lógica reutilizável da calculadora e dos temas.
- `src/utils`: funções de cálculo e formatação de valores.
- `src/App.jsx`: composição principal da aplicação.
- `vite.config.js`: configuração do Vite e do caminho base do GitHub Pages.

## Aprendizados

Durante o desenvolvimento deste desafio, pratiquei:

- Criação de interfaces reutilizáveis com componentes React.
- Gerenciamento de estado com `useState` e efeitos com `useEffect`.
- Organização da lógica de negócio em hooks e funções utilitárias.
- Implementação de eventos de teclado e interação com botões.
- Construção de um sistema de temas com Context API.
- Criação de layouts responsivos com Tailwind CSS.
- Configuração de um projeto React com Vite.
- Geração de build de produção e publicação no GitHub Pages.

## Como executar localmente

Clone o repositório, instale as dependências e inicie o servidor de desenvolvimento:

```bash
git clone https://github.com/hangtime319/calculator-app.git
cd calculator-app
npm install
npm run dev
```

Para gerar o build de produção:

```bash
npm run build
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera os arquivos de produção.
- `npm run preview`: visualiza o build localmente.
- `npm run lint`: executa a análise de código com ESLint.
