# Guia Estelar do CSS

## Cascading Style Sheets

Arquivo que dá estilo ao HTML, tornando-o mais bonito.

## A Cascata - O lendário "C" do CSS

A cascata define qual regra aplicar a determinado elemento quando houver mais de uma regra aplicada ao mesmo elemento. Para isso ela leva em consideração 3 fatores:

1. A origem do estilo
2. A especificidade
3. Comando "!important"

### 1. A origem do estilo

- inline - escrito dentro da tag do HTML.
- tag style - tag html no head do arquivo.
- tag link - outro arquivo linkado no meta.

inline > tag style > tag link

Para os de mesma origem, são aplicados os que vêm por último, pois o código é lido de cima para baixo.

### 2. Especificidade

0. Universal selector; Combinators and negation pseudo-class (:not())
1. Element/Type selector; and pseudo-elements (::before, ::after)
2. Classes; Atribute selectors ([type="radio"])
3. ID selector
4. Inline

### 3. Comando !important

- Evitar o uso
- Não é considerado boa prática
- Quebra o fluxo natural da cascata

## At rules

Está relacionado ao comportamento do CSS

Começa com o sinal de @ e é seguido pelo identificador

- @import = incluir CSS externo

- @media = regras condicionais para dispositivos.

- @font-face = fontes externas

- @keyframes = animation

Não entendi nada, mas acho que no futuro vou entender. CONFIA 04/03/22 22h25
24/06/2022 14h03 ainda não entendi :)

## Shorthand

- Junção de propriedades
- Forma resumida
- Legível
- Sobrescreve propriedades anteriores

```css
h1 {
  /* background properties - SEM shorthand */
  background-color: rgba(51, 82, 218, 0.3);
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* background properties - COM shorthand*/
  background: rgba(51, 82, 218, 0.3) url(images/bg.gif) no-repeat left top;

  /* font properties - SEM shorthand */
  font-style: italic;
  font-weight: bold;
  font-size: 3em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* font properties - COM shorthand */
  font: bold italic 3em/1.2 Arial, sans-serif;
}
```

## Funções

-Nome da função seguido de abre e fecha parêntesis
-Recebe argumentos (valores)

```css
button {
  color: rgb(255 0, 100);
  width: calc(100% - 10px);
}
```

## Vendor prefixes

São features (funcionalidades) do browser que ainda não foram lançadas oficialmente, mas os desenvolvedores já podem testá-las.

```css
p {
  -webkit-background-clip: text; /*Chrome, Safari, iOS e Android */
}
```

##
