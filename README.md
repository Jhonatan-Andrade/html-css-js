
<h1 align="center">Web Site de Reseitas</h1>

<p></p>
<img src="./assets/home.png" width="500px" />
<img src="./assets/receitas.png" width="500px" />

<br/>
<h2>🎲 Tipo de dados que api  retorna</h2>


<p>🚀 http://localhost:3333/recipes</p>

```typescript
type Recipes = [{
  "id": number,
  "title": string,
  "description": string,
  "clue": string,
  "img": string,
  "ingredients": [string,string,string],
  "preparation": [string,string,string],
  "category": string,
  "stars": string
}]
```
<p>🚀 http://localhost:3333/category</p>

```typescript
type Category = [string]
``` 
<br/>

## 💻 &nbsp;Tecnologias usadas no projeto

![HTML](https://img.shields.io/badge/-HTML-05122A?&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?&logo=CSS3&)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?&logo=javascript)&nbsp;

> **Nota:** Os testes podem ser realizados sem depender de uma API.