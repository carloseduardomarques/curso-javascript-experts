
//Este comando so será executado após o carregamento total da página

window.onload = function(){
    
    var meuBotao = document.getElementById("botao");
    
    console.log(meuBotao);
    
    /*meuBotao.onclick = meuevento;*/
    
    /*Utilizando metoto listener*/
    meuBotao.addEventListener("click",meuevento);
    
    }    
    
    function meuevento(){
    
     alert("Você clicou aqui: Parabens o evento funcionou");
    
    }
    

    /*Principais

/*Eventos do mouse*/
/*
click
  o evento click ocorre quando é dado um clique simples ou pressionado a tecla enter

  dbclick 

  o evento db click ocorre quando é dado um clique duplo

  mousedown
   
  Ocorre quando O usuario pressiona qualquer um do botoes do mouse

  mouseup

   Ocorre quando o usuário solta o botão , após ter pressionado um dos botóes do mouse

 mouseover   

 Ocorre quando o usuario desloca o ponteiro do mouse em direcao a um elemnto e este ating seus limites Extremos

mouseout
Ocorre quando estadon o ponteiro do mouse sobre um elemento o usuario desloca-o para fora do elemento e o ponteiro ultrapassa os limites externos desse elemento

mousemove

Ocorre quando o usuario move o ponteiro do mouse

Eventos de teclado

keydown
Ocorre quando o usuario pressiona uma tecla qualquer do teclado

Keypress
 Ocorre quando o usuario pressiona uma tecla do teclado que resulte em um caractere ou na alteracao da apresentação de um texto na tela

 keyup
 Ocorre quando o usuario solta uma tecla do teclado que tenha sido anteriormente pressionada


Evento de HTMLAllCollection
Load
 O evento onload ocorre quando a pagina termna de ser carregada

 Error
  O evento onerror permite que se gerenciem os erros javascript ocorridos em uma pagina

  abort
   Ocorre quando ha a interrupcao do processo de download de um elemento-objeto 

   focus 
   O evento onfocus ocorre quando a janela do navegador ganhar o FocusNavigationEvent

   resize

   Ocorre quando a janela do navegador e redimensionada

   scroll

   Ocorre quando uma das barras do navegadores é ascionada

   submit

   Ocorre quando o botao submit de um formulario e clicado

   reset
   Ocorre quando o botao reset de um formulario e clicado

   change 
   Ocorre quando um campo tipo texto perde o foco apos ter sido alterado seu conteudo

   unload
   Ocorre depois que a janela do navegador e fechada

   blur
    Ocorre quando o objeto perde o foco*/
