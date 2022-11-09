# Guia Estelar de HyperText Markup Language, famoso HTML

## Elementos

### Listas

```html
<!-- Listas ordenadas e não ordenadas
- ol (ordered list)
- ul (unordered list)
- li (list item)
-->

<!-- elementos isolados (forma incorreta) -->
<h2>Título</h2>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>

<!-- lista ordenada (forma correta) -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- lista não ordenada (forma correta) -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Citações

```html
<!--
-blockquote
-cite
-q
-->

<!-- <blockquote>  -->
<blockquote
  cite="https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/citacoes"
>
  <p>
    O <strong>Elemento HTML <code>&lt;blockquote&gt;</code></strong> (ou
    <em>HTML Block Quotation Element</em>) indica que um texto externo foi
    citado.
  </p>
</blockquote>

<!-- <cite> -->
<p>
  De acordo com o
  <a
    href="https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/citacoes"
  >
    <cite>curso Discover da rocketseat</cite>:
  </a>
</p>

<!-- <q> -->
<p>
  O elemento quote — <code>&lt;q&gt;</code> — é
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
    >usado para citações curtas que não precisam de parágrafos ou quebras de
    linha.</q
  >
  --
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    <cite>MDN q page</cite></a
  >.
</p>
```

### Abreviações

```html
<!--
- abbr (abbreviation)
-->

<p>
  Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar
  nossos documentos da web.
</p>

<!-- Para ver o título, basta descansar o mouse em cima -->
```

### Detalhes de contato

```html
<!-- Especificar o autor da página html
- adress (endereço)
-->

<address>
  <p>
    <strong>João Pedro Lima Nogueira </strong><br />
    Campo Grande, MS<br />
    Twitter: Jotaa_dev <br />
    Instagram: pedronogueira_eng
  </p>
</address>
```

### Lista de descrição

```html
<!--
- dl (description list)
- dt (description term)
- dd (description)
-->

<h2>Glossário</h2>
<dl>
  <dt>Hypertext</dt>
  <dd>É um hipertexto</dd>

  <dt>Markup</dt>
  <dd>Marcação do texto</dd>

  <dt>Language</dt>
  <dd>É uma linguagem com sua semântica, sintaxe e etc</dd>
</dl>
```

### Representação de código

```html
<!-- 
- code (código)
- pre
-->

<!-- code: Partes genéricas de código -->

<code>
  function setSuccessFor(input) { const formControl = input.parentElement
  //adicionar a classe de sucesso formControl.className = 'form-control success'
  }
</code>

<!-- pre: Blocos de código. Essa tag mantém os espaços em branco e recuos do código -->

<pre>
  <code>
    if (passwordConfirmationValue == '') {
    setErrorFor(passwordConfirmationValue, 'É necessário confirmar a senha')
  } else if (passwordConfirmationValue.length < 7) {
    setErrorFor(passwordConfirmationValue, 'A senha não é válida')
  } else if (passwordConfirmationValue == passwordValue) {
    setSuccessFor(passwordConfirmation)
  } else {
    setErrorFor(passwordConfirmation, 'As senhas não conferem')
  }
  </code>
</pre>
```

### Elementos genéricos

```html
<!-- 
- div (division/divisão)
- span (período)
- section (seção)
- muitos outros
 -->

<section id="Nome da seção">
  <span>Conteúdo</span>
  <div>Conteúdo ou outros elementos</div>
</section>
```

## Tag Âncora, famosos links

### Aplicações básicas da tag âncora

```html
<!-- Levar para determinada parte da mesma página -->
<ul>
  <li><a href="#about">Sobre mim</a></li>
  <li><a href="#history">História</a></li>
  <li><a href="#contact">Trabalhos </a></li>
</ul>

<section id="about">Elementos da seção Sobre</section>
<section id="history">Elementos da seção História</section>
<section id="contact">Elementos da seção contact</section>

<!-- Levar para outra página do mesmo (ou outro) diretório -->
<a href="Arquivo.html">Mesmo diretório</a>
<a href="Subpasta/Arquivo.html">Arquivo na subpasta</a>
<a href="../Arquivo.html">Arquivo do diretório pai</a>
<a href="../subpasta/Arquivo.html">Arquivo na subpasta do diretório pai</a>

<!-- Levar para outras páginas da web -->
<ul>
  <li><a href="https://www.instagram.com/pedronogueira_eng/">Instagram</a></li>
  <li><a href="https://github.com/Joao-Pedro-Nogueira">GitHub</a></li>
  <li>
    <a href="mailto:jpedronogueira.dev@gmail.com.br">Email</a>
  </li>
</ul>
```

### Atributos

- globais
- href
  - Uniform Resource Locator: URL completa (outra página)
    - API's
  - fragmento (mesma página)
  - email (mailto:meuemail@domínio)
  - telefone ()
  - existem outros
- dowload
- target
  - "_self" (padrão)
  - "_blank" (nova guia)
