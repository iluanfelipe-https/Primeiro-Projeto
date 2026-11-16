// isso que esta sendo criado servirá para alternar entre o modo claro e escuro do site.
function toggleMode() {
  const html = document.documentElement

  // o toggle é uma forma mais simplificada de fazer a mesma coisa que o if. Ele verifica se o elemento html tem a classe light. Se tiver (true), ele remove a classe light, caso contrario, ele adiciona a classe light.
  html.classList.toggle("light")

  // if é uma condicional que verifica se o elemento html tem a classe light. Se tiver (true), ele remove a classe light, caso contrario, ele adiciona a classe light.

  // if (html.classList.contains('light')) {
  //    html.classList.remove('light')
  // } else {
  //    html.classList.add('light')
  // }

  // para fazer a transição da imagem do modo escuro para o modo claro, e necessário pegar a tag img > substituir a imagem > adicionar a condição, se a página estiver no light mode, adicionar a imagem do light mode, caso contrario, manter a imagem do dark mode (img padrao do site).

  //pegando a imagem

  const img = document.querySelector("#profile img")

  //substituindo a imagem

  if (html.classList.contains("light")) {
    // se tiver a classe light, adicionar a imagem do light mode
    img.setAttribute("src", "./assets/image-light.png")
  } else {
    // se não tiver a classe light, adicionar a imagem normal (dark mode)
    img.setAttribute("src", "./assets/image-dark.png")
  }
}
