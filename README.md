# MyLinks

Esse projeto é uma alternativa open source para os websites agregadores de links para redes 
sociais criado usando React. A intenção principal é ser uma alternativa de fácil configuração 
para iniciantes e sem nenhum tipo de rastreamento que pode ser hospedada no próprio GitHub.

## Índice

- [Características](#características)
- ["Instalação" usando GitHub Pages](#instalação-usando-github-pages)
  - [Clonando o repositório](#clonando-o-repositório)
  - [Inserindo suas informações](#inserindo-suas-informações)
  - [Habilitando a exibição da sua página pelo GitHub Pages](#habilitando-a-exibição-da-sua-página-pelo-github-pages)
- [Configuração](#configuração)
  - [`user`](#user)
  - [`background`](#background)
  - [`buttons`](#buttons)
  - [`groups`](#groups)
  - [`networks`](#networks)

## Características

* configurável através de um arquivo JSON
* sem rastreamento de dados ou cookies
* interface com suporte a português, inglês e espanhol
* layout adaptado para celulares
* código completamente aberto

## "Instalação" usando GitHub Pages

Você pode criar uma versão sua clonando esse projeto e adicionando as suas informações ao 
arquivo principal de configuração seguindo essas instruções:

#### Clonando o repositório:

1. [Crie uma conta](https://github.com/signup) no GitHub caso você ainda não possua uma.
2. [Siga essas instruções](https://docs.github.com/pt/get-started/quickstart/fork-a-repo#forking-a-repository) para criar um fork desse projeto. Não se esqueça de desmarcar a opção `Copy the main branch only`!

#### Inserindo suas informações:

3. Troque para a branch `gh-pages`.
4. Abra o arquivo `options.json`.
5. Clique no botão com o ícone de um lápis para editar o arquivo.
6. Edite todas as informações necessárias de acordo com o guia da próxima seção.
7. Ao terminar, clique no botão `Commit changes` no final da página para salvar suas configurações.

#### Habilitando a exibição da sua página pelo GitHub Pages:

8. Acesse a aba de `Settings` do seu repositório.
9. Clique na opção `Pages`.
10. Na seção `Build and deployment` clique no dropdown abaixo do item `Branch` 
e escolha a branch chamada `gh-pages`.
11. Clique em `Save`.
12. Depois de 1 ou 2 minutos seu site já deve estar no ar! Acesse pelo endereço 
`https://seu-usuario.github.io/my-links` e confira!

## Configuração

Esse é um exemplo de arquivo de configuração:

```js
{
  "user": {
    "language": "en_US",
    "name": "SEU NOME",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dolor mauris. Maecenas in enim at arcu rhoncus faucibus nec in risus. Nam hendrerit et mi quis pretium. Duis ullamcorper vitae est et consequat. Duis vitae magna at justo vestibulum efficitur. Proin convallis sollicitudin nisi eu feugiat. In ultricies dictum tincidunt. Vestibulum a libero a urna ullamcorper imperdiet eget at neque. Sed sagittis turpis ac elit dapibus gravida. Sed tincidunt feugiat ante auctor sagittis. Morbi mollis lacinia eleifend. Nulla sit amet purus ex."
  },
  "background": {
    "color": "#0f0f0f",
    "image": "https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg"
  },
  "buttons": {
    "color": "#d9d9d9",
    "hover_color": "#ccccff",
    "text_color": "#1f1f1f"
  },
  "groups": [
    "Social networks",
    "Gaming"
  ],
  "networks": [
    {
      "name": "Twitter",
      "url": "https://twitter.com/",
      "icon": "twitter",
      "group": "Social networks"
    },
    {
      "name": "Instagram",
      "url": "https://instagram.com/",
      "icon": "instagram",
      "group": "Social networks"
    },
    {
      "name": "Spotify",
      "url": "https://open.spotify.com/",
      "icon": "spotify"
    },
    {
      "name": "PSN",
      "url": "https://psnprofiles.com/",
      "icon": "playstation",
      "group": "Gaming"
    },
    {
      "name": "Steam",
      "url": "https://steampowered.com/",
      "icon": "steam",
      "group": "Gaming"
    },
    {
      "name": "Github",
      "url": "https://github.com/",
      "icon": "github"
    }
  ]
}
```

Todos os campos marcados com <sup>__*__</sup> são obrigatórios!

#### `user`

São as suas informações pessoais.

`language`<sup>__*__</sup>: O idioma de exibição da página. Pode ser uma de três opções: 
* `pt_BR`
* `en_US`
* `es_ES`

`name`<sup>__*__</sup>: Nome que você quer exibir na página.

`bio`: Descrição curta sobre você. Pode ser um texto vazio caso você não 
queira exibir o box "Sobre mim" na página.

#### `background`

Informações sobre o plano de fundo.

`color`<sup>__*__</sup>: A cor de fundo da página.

`image`: Imagem para ser exibida como background. Deixe em branco para 
utilizar só a cor de fundo.

#### `buttons`

Definições de cores dos botões exibidos na página.

`color`<sup>__*__</sup>: A cor principal do botão.

`hover_color`<sup>__*__</sup>: Cor exibida quando se passa o mouse por cima de 
algum dos botões.

`text_color`<sup>__*__</sup>: Cor do texto dos botões.

#### `groups`

Essa é uma lista dos nomes dos grupos que você quer exibir na página, na mesma 
ordem dessa lista. Caso não queira exibir grupos mantenha este campo vazio. Itens 
do grupo `networks` que não façam parte de nenhum grupo serão exibidos ao final 
com o nome de `Outros`.

#### `networks`

Grupo dos itens com as informações das suas redes sociais. Cada um 
dos grupos é formado por esses itens.

`name`<sup>__*__</sup>: Nome da rede social ou texto para aparecer no botão.

`url`<sup>__*__</sup>: Link para o seu perfil.

`icon`: Um ícone da seguinte lista para representar a sua rede social.
* `amazon`
* `artstation`
* `bandcamp`
* `battlenet`
* `behance`
* `blogger`
* `dailymotion`
* `deviantart`
* `discord`
* `dropbox`
* `email`
* `facebook`
* `flickr`
* `github`
* `googledrive`
* `instagram`
* `kickstarter`
* `lastfm`
* `linkedin`
* `medium`
* `patreon`
* `paypal`
* `pinterest`
* `playstation`
* `reddit`
* `soundcloud`
* `spotify`
* `steam`
* `telegram`
* `tiktok`
* `tumblr`
* `twitch`
* `twitter`
* `vimeo`
* `whatsapp`
* `wordpress`
* `xbox`
* `youtube`

`group`: O mesmo nome de um dos grupos definidos no item `groups`. Caso não 
queira que a rede faça parte de nenhum grupo omita esse campo.
