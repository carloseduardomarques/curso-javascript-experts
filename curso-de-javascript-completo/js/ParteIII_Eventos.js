
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
    