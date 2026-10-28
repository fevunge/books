# Books

Catálogo de livros técnicos em PDF para consulta e aprendizagem de programação,
sistemas, redes e bases de dados.

## Contribuição

As contribuições são feitas através de Pull Requests (PRs). Para adicionar um
livro, segue estes passos:

1. Coloca o ficheiro PDF na pasta `_uploads/`.
2. Copia o nome exacto do ficheiro, incluindo maiúsculas, minúsculas, espaços e
	a extensão `.pdf`.
3. Adiciona esse mesmo nome à lista `BOOK_FILES` no ficheiro
	[`books.json`](books.json).
4. Adiciona novamente o nome exacto ao array `BOOK_FILES` em
	[`js/main.js`](js/main.js).
5. Confirma que o livro aparece no catálogo e que o link abre o PDF.
6. Cria o PR com uma breve descrição da alteração.

### Exemplo

Se o ficheiro for:

```text
_uploads/Introducao a Redes.pdf
```

O nome deve ser adicionado sem alterações nos dois ficheiros:

```json
"Introducao a Redes.pdf"
```

```javascript
"Introducao a Redes.pdf",
```

### Regras importantes

- Não alteres o nome do ficheiro depois de o adicionares às listas.
- O nome em `_uploads/`, `books.json` e `js/main.js` deve ser exactamente igual.
- Envia apenas livros que possam ser partilhados legalmente.
- Mantém o PR focado numa adição ou actualização de livros.

## Verificação local

Antes de abrir o PR, confirma que:

- o PDF está dentro de `_uploads/`;
- o nome aparece em `books.json` e em `js/main.js`;
- o catálogo abre sem erros no navegador;
- o link do livro abre o ficheiro correcto.