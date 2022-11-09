# O que há de mais importante para se aprender sobre o CSS

## Posicionamento

O CSS considera todos os elementos HTML como caixas retangulares em 2D

- height
- width
- content
- border
- padding (preenchimento interno)
- margin (espaços fora da caixa)

## Box sizing

Estabelece a referência para o tamanho da caixa. As propriedades como "height" e "width" irão assumir essa referência. A margem será contada a partir da referência. Se refere a prória caixa.

- box-sizing: border-box | padding-box | content-box

```css
button {
  box-sizing: border-box;
  box-sizing: padding-box;
  box-sizing: content-box;
}
```

## Display block e inline

Como as caixas se comportam em relação às outras.
Define o comportamento externo à caixa.

### Block

- Ocupa toda a linha, jogando o próximo elemento abaixo desse.
- Width e Height são respeitados.
- Padding, margin e border irão funcionar normalmente.

`<p><div><section><h1>`

### Inline

- Elemento ao lado um do outro.
- Width e Height não funcionam.
- Padding, margin e border: só funcionam os valores horizontais.

`<a><strong><span><em>`

## Margin

- 1 valor: T | R | B | L
- 2 valores: T | R L | B
- 3 valores: T R B L

## Background

### background-image

Inserir uma imagem de fundo:

```css
section {
  background-image: url(link);
}
```

Propriedades:

### repetição

```css
section {
  background-repeat: no-repeat; /* A imagem não se repete */
  background-repeat: repeat-y; /* Se repete apenas em Y */
  background-repeat: repeat-x; /* Se repete apenas em X */
}
```

### posição

```css
section {
  background-position: center top; /* Valor horizontal | valor vertical */
}
```

### tamanho

```css
section {
  background-size: contain; /* se ajusta para caber 100% dentro da box*/
  background-size: cover; /* preenche 100% do fundo */
  background-size: 50%; /* horizontal | (auto) vertical*/
  background-size: 42rem; /* horizontal | (auto) vertical*/
}
```

```css
section {
  background-origin: border-box;
  background-origin: padding-box;
  background-origin: content-box;
}
```
