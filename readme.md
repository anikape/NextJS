## Guia de Instalação Next.JS

1º Abre o terminal

npm init - para criar o package.json

## Criação do Projeto com o Next.js
Serão instaladas as depéndências principais:

React dom - gerenciar rota
React
E o Next que roda sobre o react


### npm install next react react-dom

## Dentro package.json alterar o scripts:

  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"

  ## Para criar a página

  Cria o diretório na raiz a pasta pages (não pode ser outro nome)

  A home ficará dentro dessa pasta e será o index.js
  Dentro do index.js cria a função Home, dentro dela uma div com o conteúdo. Por fim exporta
 
 function Home() {
  return <div>Welcome to Next.js!</div>
}

export default Home

### Para rodar o projeto. Ele vai criar a dependência next

npm run dev

### para acessar usa-se o 

 http://localhost:3000


 ### Sempre verificar a documentação para verificar as funções de cada parte do sistema

 https://nextjs.org/docs


 ### O ícone da página fica no diretório público


 ### PROBLEMAS:
 Formatação <br>
 Fivicon que não aparece
