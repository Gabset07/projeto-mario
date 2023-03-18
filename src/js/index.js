//passo 1 - dar um geito de pegar o elemento do botão do trailer com o js

const botaoTrailerMario = document.querySelector('.botao-trailer');

//passo 3 -dar um geito de pegar o elemento modal no js

const modal = document.querySelector('.modal');

const video = document.getElementById('video');
const linkDoVideo = video.src;
//passo 2- dar  um geito de indentificar o usuario ao clicar no botão


botaoTrailerMario.addEventListener('click', ()=>{
    // passo 4 - abrir a modal na tela
    modal.classList.add('aberto');

});


//OBJETIVO 2 -dar um geito de pegar o elemento da modal fechada usando o js

const botaoFecharModal  = document.querySelector('.fechar-modal')

botaoFecharModal.addEventListener('click', ()=>{
    //passo 3 - fechar a modal
    modal.classList.remove('aberto')
    video.setAttribute('src','')
    video.setAttribute('src',linkDoVideo)
})



