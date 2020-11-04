Launchbase
Desafio 3-1: Primeiro servidor
“A recompensa do estudo é a compreensão.”
Made by Rocketseat License

Sobre o desafio | Entrega | Licença

🚀 Sobre o desafio
Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de Cursos e Sobre). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo.

Arquivos HTML
courses.njk: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.

about.njk: Arquivo referente à pagina de descrição, deve ser servido na rota /about.

layout.njk: Arquivo referente à base comum entre as páginas.

not-found.njk: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

Layout.njk como base
Ter um texto infortivo sobre o erro
Dica: Para capturar essas requisições, basta adicionar esse trecho após todas as rotas no seu server.js:

server.use(function(req, res) {
res.status(404).render("not-found");
});
Estilização
Você tem liberdade para escolher a estilização que preferir para esse desafio.
