![Wiz solucoes](https://syz.wizsolucoes.com.br/assets/header/img/logowiz.svg)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

  


# :sparkles: Wiz Tree
 Um simples e flexível componente  de visualização de pastas ou hierarquia, trazendo funcionalidade dinâmicas.

## Como usar 


```
npm i @wizsolucoes/wiz-tree
```

|Frameworks| Link|
|--|--|
|Angular| [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-angular)|
|React | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-react)|
| Vue | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-Vue)|
[outros](https://stenciljs.com/docs/overview)


### Componente html
```html
<wiz-tree list="list"></wiz-tree>
```

###  Exemplo parametros listagem
Para mostrar a árvore de arquivos deve seguir o seguinte exemplo.
```JSX
const list = [{
	label: 'Julieta Pena Rocha',
	selected: false, 
	disabledChild: false,
	open: false,
	child: [
		{label: 'Paula Domingues', selected: false, disabledChild: true, open: false, child: []},
		{label: 'Joaquin Corona', selected: false, disabledChild: false, open: false, child: []},
	]
}]
```
####  Parâmetros  da listagem
| Parâmetro | tipagem | Obrigatório | Descrição | 
| -- | -- | -- | -- |  
| Label | string | Sim | Esse parâmetro é o que mostra no front para selecionar.
| selected | boolean | Não | Esse parâmetro corresponde se o item já vem selecionado.
| disabledChild | boolean | Não | Esse parâmetro sinaliza se existe valores abaixo dele.
| open | boolean | Não |  Esse parâmetro define se há árvore abaixo já deve vim aberta.
| child | Array | Não | Deve passar os elementos filhos com os mesmo parâmetro acima.


####  Outros parâmetros

| Atributo |  tipagem  | obrigatório | Descrição |   
|  -- | -- | -- | -- |
| list | itemTreeModel[]  | Sim | Listagem da pasta ou de hierarquia | 
| fetchdata | Boolean | Não | Passe o valor `true` para informa que os valores abaixo da lista é dinâmico. 

  ## Eventos
Existe 2 tipos de eventos do componente para emitir para o componente pai ou página responsável pelo web componente, `handleSelected` e `requestData`.

> O web componente não suporta o evento de ***emitir***  do web componente para o componente pai. No entanto, o **stencilJS** fornece uma **API** para especificar os evento que um componente pode emitir para o componente pai, usando os `Event()`e `Listen()`
Saiba mais nos links abaixo:
 [Mozilla web componentes eventos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
 [Eventos com stencilJS](https://stenciljs.com/docs/events)

nos exemplos abaixo estaremos mostrando com javascript puro, deixaremos os links abaixo com o exemplo de *frameworks* populares.

Link React
Link Vue
Link Angular

 #### Evento: ***handleSelected***
Esse evento emite os items selecionados da listagem do web componente.

Exemplo: 

Html
```html
<wiz-tree id="view"></wiz-tree>
```
Javascript
```jsx
// declare componente
var wizTree = document.getElementById('view');

// recebendo valores selecionados
wizTree.addEventListener('handleSelected', event  => {
	console.log('items selecionados --> ', event)
});
```

 #### Evento: ***requestData***
 Esse evento é chamado quando o parâmetro **fetchdata** é passado como ***true*** , esse evento acontecerá apos o clique da hierarquia abaixo, esperando um retorno para o carregamento dos novos items.

> Esse evento aciona o loading da hierarquia, esperando o retorno dos novos items, caso não há novos items deve retorna vazio para desabilitar o loading.


Exemplo: 

Html
```html
<wiz-tree id="view"></wiz-tree>
```
Javascript
```jsx
// declare componente
var wizTree = document.getElementById('view');

// recebendo valores selecionados da requisição
wizTree.addEventListener('requestData', event  => {
	const itemSelected =  event.detail 
	/// Exemplo de requisição 
	Axios.get(`exemplo/requisicao/${itemSelected.id}`)
	.then( data => {
	
	  itemSelected.child = data // Adiciona os novos valores no parametro child.
		//ABAIXO RETORNA PARA O COMPONENTE OS NOVOS VALORES 
		wizTree.setchild = itemSelected
	})
});
```

 
 ## Customização
Você pode customizar o web componente usando *variáveis CSS*,
 [saber mais sobre CSS variaveis ](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)

| Variável | valor padrão | Descrição |  
| - | - | - | 
| `--colorSelected` | `#00AA9B` | Cor do ***checkbox*** selecionado | 
| `--sizeCheck` | `12px` | Tamanho do quadrado indicando ***checkbox*** | 
|  `--sizeArrow` | `15px` | Tamanho da seta indicadora em pixel. | 
| `--textSize` | `16px` | Tamanho do texto padrão em pixel | 
|  `--colorText` | `#AFAEAE` | Cor da label descrição do item. |
| `--colorArrow` |  `#00AA9B` | Cor da seta indicando hierarquia. |
| `--fontFamily` |  ` 'Roboto', sans-serif;` | Fonte web para visualizar label. | 
| `--textLoading` |  `Aguarde` | Texto do seletor ***::before*** no estado de *loading*. 
