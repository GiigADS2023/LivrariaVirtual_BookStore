/*Método get - Responsável em pegar os dados*/
async function carregaDadosAPI() {
    try {
        const response = await fetch('http://localhost:3000/Livros');
        const data = await response.json();
        exibirDadosHTML(data);    
    } catch (error) {
        console.error('Erro ao carregar os dados da API:', error);
    }
}

function exibirDadosHTML(data) {
    var listaLivros = document.getElementById("lista-livros");
    /*Para cada elemento ele vai ler e exibir na tela*/
    data.forEach(element => {
        var listItem = document.createElement("li");

        var textContent = "<span>Livro: " + element.livro + "</span><br>Autor(a): " + element.autor;
        //Insere dentro do elemento
        listItem.innerHTML = textContent;

        var image = document.createElement("img");
        image.src = element.imagem;
        image.alt = element.livro;
        image.style.maxWidth = "100px";
                      
        listItem.appendChild(image);
        listaLivros.appendChild(listItem);
    });
}

window.onload = function() {
    carregaDadosAPI();
}