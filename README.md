# Pedido Pago Challenge
Created: 2021-10-05 07:39

O objetivo do desafio é ter a melhor avaliação das habilidades do candidato à vaga de front-end. Para o desafio disponibilizaremos **5 dias** para o desenvolvimento da aplicação descrita abaixo.

## Instruções para a entrega

Para que a avaliação seja realizada o candidato deverá criar um repositório na sua conta do _Github_ (crie uma, caso não possua) em seguida implementar o projeto descrito abaixo. Após o desenvolvimento, envie o link do repositório para o seu contato da Pedido Pago.

## Descrição do projeto

O candidato deverá consumir a API pública da [Marvel](https://developer.marvel.com/), listando o maior número de informações possíveis (characters, stories, series), o candidato deverá utilizar as features do nextjs para listar e gerar páginas estáticas.

### Funcionalidades Requeridas

-   configuração do axios para consumo da API utilizando sua key da Marvel
-   Ter uma página para listagem de sua preferência (characters, stories, series, etc.), com card para cada item da lista.
-   Uma página para o item específico
-   Criação da UI para as páginas listadas acima

### Tecnologias Requeridas

-   [nextjs](https://github.com/vercel/next.js) - Biblioteca usada para o desenvolvimento da aplicação;
-   [material-ui](https://material-ui.com/) - Utilizado para a estilização dos components;
-   [axios](https://github.com/axios/axios) - para consumo da API

### Critérios de avaliação

Seu projeto será avaliado de acordo com a qualidade do seu código e sua organização de arquivos do projeto, além do conhecimento utilizado em JavaScript/Nextjs para o consumo da API.

# Proccess
1. Crio um app com create-next-app.
2. Inicio o git, e subo para o GitHub.
3. Instalo as ferramentas, MaterialUi, Axios, e CryptoJs.
4. Consigo uma key da API Marvel.
5. Ocultei as keys do codigo base, usando uma variavel de ambiente.
6. Para poder acessar as keys no codigo preciso nomea-las com NEXT_PUBLIC_
7. Depois uso o getStaticProps do Next para poder pegar as informaçoes da key de modo estatico.
8. Crio uma timestamp com new Date.
9. Crio uma hash com o CryptoJs e MD5, utilizando o timestamp, a key privada e a publica. <= a ordem tem que ser exatamente essa (ts + privateKey + publicKey) caso contrario nao ira funcionar.
10. Usei a funçao axios.create para poder criar uma url personalizada com as informaçoes da key, hash e timestamp. 
11. Uso axios.get para pegar a url mudando apenas o parametro de pagina ex: axios.get(/characters) ou (/comics), assim posso usar a mesma funçao de axios.create em diversas paginas.
12. Utilizo o useState do React para poder armazenar as informaçoes da API em um array.
13. A partir desse momento comecei a trabalhar no layout da pagina ja que tinha excedido o limite de requerimentos para a API.
14. Fiz uma landing page basica com alguns botoes do MaterialUi, cada um do botoes leva para uma pagina diferente.
15. Utilizo o AppBar do MaterialUi para fazer um header para navegaçao.
16. Na pagina de listagem dos dados utilizo .map() para listar os dados de personagem.
17. Um botao para cada personagem e criado, levando para a pagina individual de cada um.
18. Adiciono um botao no final da pagina para que novos dados sejam carregados.
19. Na pagina individual adiciono a descriçao e mais algumas informaçoes. 
