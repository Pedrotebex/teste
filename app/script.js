// Selecione a imagem pelo ID
const criarTopicoImg = document.querySelector('.criar_topico');

// Adicione um ouvinte de evento de clique à imagem
criarTopicoImg.addEventListener('click', function() {
    // Crie o formulário dinamicamente
    const formulario = document.createElement('form');
    
    // Crie o campo de entrada para o assunto
    const campoAssunto = document.createElement('input');
    campoAssunto.type = 'text';
    campoAssunto.placeholder = 'Assunto da pergunta';
    
    // Crie o campo de entrada para a pergunta
    const campoConteudo = document.createElement('textarea');
    campoConteudo.placeholder = 'Conteúdo';
    campoConteudo.rows = 5; // Defina o número de linhas
    
    // Crie o botão de envio
    const botaoEnviar = document.createElement('button');
    botaoEnviar.textContent = 'Enviar';
    
    // Adicione os campos e o botão ao formulário
    formulario.appendChild(campoAssunto);
    formulario.appendChild(campoConteudo);
    formulario.appendChild(botaoEnviar);
    
    // Selecione a div de discussões
    const divDiscussoes = document.querySelector('.card_discussoes');
    
    // Adicione o formulário abaixo da div de discussões
    divDiscussoes.appendChild(formulario);
    
    // Remova o formulário após enviar
    botaoEnviar.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        
        // Captura os valores digitados nos campos
        const assunto = campoAssunto.value;
        const conteudo = campoConteudo.value;
        
        // Crie a div de tópicos para o novo tópico
        const novoTopico = document.createElement('div');
        novoTopico.classList.add('topicos');
        
        // Crie a div do título
        const divTitulo = document.createElement('div');
        divTitulo.classList.add('titulo');
        
        // Crie o título
        const tituloTopico = document.createElement('h3');
        tituloTopico.classList.add('titulo-topico');
        tituloTopico.textContent = assunto; // Use o valor do campo de assunto
        
        // Adicione o título à div do título
        divTitulo.appendChild(tituloTopico);
        
        // Crie o parágrafo do autor
        const autor = document.createElement('p');
        autor.textContent = 'Seu nome aqui'; // Altere para o autor real
        
        // Adicione o parágrafo do autor à div do título
        divTitulo.appendChild(autor);
        
        // Crie o parágrafo do texto do tópico
        const textoTopico = document.createElement('p');
        textoTopico.classList.add('topico__texto');
        textoTopico.textContent = conteudo; // Use o valor do campo de conteúdo
        
        // Adicione o texto do tópico à div do título
        divTitulo.appendChild(textoTopico);
        
        // Crie a div dos ícones do tópico
        const divIconesTopico = document.createElement('div');
        divIconesTopico.classList.add('icones__topico');
        
        // Crie as imagens e os parágrafos dos ícones
        const imgMaisInformacoes = document.createElement('img');
        imgMaisInformacoes.src = 'assets/mais_informações.png';
        imgMaisInformacoes.alt = 'Mais informações';
        
        const imgFavoritar = document.createElement('img');
        imgFavoritar.src = 'assets/favoritar.png';
        imgFavoritar.alt = 'Favoritar';
        
        const paragrafoLike = document.createElement('p');
        paragrafoLike.textContent = '1 like';
        
        const paragrafoResposta = document.createElement('p');
        paragrafoResposta.textContent = '1 Resposta';
        
        // Adicione as imagens e os parágrafos à div dos ícones do tópico
        divIconesTopico.appendChild(imgMaisInformacoes);
        divIconesTopico.appendChild(imgFavoritar);
        divIconesTopico.appendChild(paragrafoLike);
        divIconesTopico.appendChild(paragrafoResposta);
        
        // Adicione a div do título e a div dos ícones do tópico à nova div de tópico
        novoTopico.appendChild(divTitulo);
        novoTopico.appendChild(divIconesTopico);
        
        // Adicione a nova div de tópico à div de discussões
        divDiscussoes.appendChild(novoTopico);
        
        // Remova o formulário após enviar
        divDiscussoes.removeChild(formulario);
    });
});
// Selecione o elemento "Ver mais" pelo ID
const verMais = document.getElementById('ver-mais');

// Adicione um ouvinte de evento de clique ao elemento "Ver mais"
verMais.addEventListener('click', function() {
    // Selecione o elemento de texto completo pelo ID
    const textoCompleto = document.getElementById('texto-completo');
    
    // Remova a classe que limita a altura máxima
    textoCompleto.classList.remove('lorem');
    
    // Remova o elemento "Ver mais"
    verMais.style.display = 'none';
    
    // Crie um novo elemento "Ver menos"
    const verMenos = document.createElement('span');
    verMenos.id = 'ver-menos';
    verMenos.classList.add('clicavel__ver-menos');
    verMenos.textContent = 'Ver menos';
    
    // Adicione um ouvinte de evento de clique ao elemento "Ver menos"
    verMenos.addEventListener('click', function() {
        // Adicione a classe que limita a altura máxima
        textoCompleto.classList.add('lorem');
        
        // Remova o elemento "Ver menos"
        verMenos.parentNode.removeChild(verMenos);
        
        // Exiba o elemento "Ver mais"
        verMais.style.display = 'inline';
    });
    
    // Insira o elemento "Ver menos" após o texto completo
    textoCompleto.parentNode.insertBefore(verMenos, textoCompleto.nextSibling);
});
// Função para substituir o texto completo
function substituirTextoCompleto() {
    // Selecione o elemento "Ver mais"
    const verMais = document.getElementById('ver-mais');
    
    // Adicione um ouvinte de evento de clique ao elemento "Ver mais"
    verMais.addEventListener('click', function() {
        // Selecione o elemento com o ID "texto-completo"
        const textoCompleto = document.getElementById('texto-completo');
        
        // Defina o novo texto que você quer atribuir ao elemento
        const novoTexto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.

        Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.

        Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.

        Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
        
        // Atribua o novo texto ao elemento
        textoCompleto.textContent = novoTexto;
        
        // Oculte o elemento "Ver mais"
        verMais.style.display = 'none';
    });
}

// Chame a função para substituir o texto completo
substituirTextoCompleto();

