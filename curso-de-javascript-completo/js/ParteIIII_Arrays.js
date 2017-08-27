
/*Tipos de declaracoes de array*/
/*time - new Array();

time = Array();

time = [];


time = new Array("Flamento","Vasco","Santos");
time = Array("Flamento","Vasco","Santos");
time = ["Flamento","Vasco","Santos"];
*/

/**
 * Lendo 1 array
 * 
 * nomedoArray[indice]
 
 */

 /*console.log(time[0]);
 console.log(time[1]);
 console.log(time[1]);
*/

 /**
  * MOdificando um array
  */
/*
  time[2] = "Sao paulo";
  time[3] = "Palmeiras";
  time[4] = "Fluminense";

  time = new Array("Flamento","Vasco","Santos","sao Paulo","Palmeiras");
*/
  /**
   * Arrays podem conter valor de qualquer tipo
   */
/*  meyArray = new Array("mjailton",10,{rua:30,uf:"ma"},true,[5,false,"vitoria"])
*/

/**
 * para ler um dado do tipo objeto contido em uma array, usamos a sintaxe 
 */  

 /*
 nomeArray[indice].chave;
 nomeArray[indice]["chave"];

 meuArray[0] = "mjaiton";
 meuArray[1] = 10;
 meuArray[2] = object;
 meuArray[2].rua = 30;
 meuArray[2]["uf"] = "ma";
 meuArray[3] = true;
 meuArray[4][0] = 5;
 meuArray[4][0] = false;
 meuArray[4][0] = "vitoria";
 */

 var meuArray = new Array();

 console.log(typeof meuArray);


 var time = new Array("Flamento","vasco","santos");
dados = Array("Jailton",39,{Rua: 30, quadra:20, cidade:"Sao luis"}
, ["delphi","php","java"]);
 
time[2]="Palmeiras"
time[4]="Bahia";
console.log(time.length);
console.log(time);

console.log(dados.length);
console.log(dados);

console.log(dados[2]["cidade"]);
console.log(dados[3]["cidade"]);
console.log(dados[3][3]);

var vetor = [1,2,3];
    
    console.log("Concatenado")
    resultado = vetor.concat("a","b",4,5,6) ;

    console.log(resultado);


    var vetor = [1,2,3,"jailton","a"];
    
    console.log("Pegando a posicao de 'a' ")
    resultado1 = vetor.indexOf("a") ;
    console.log(resultado1);

    console.log("Pegando a ultima posicao de 'a' ")
    resultado2 = vetor.lastIndexOf("a") ;    
    console.log(resultado2);
    
    var vetor = [1,2,3,"jailton","a"];
    
    console.log("criando separador nos registros")
    resultado = vetor.join("-") ;    
    console.log(resultado);    
    
    console.log("Qtde elementos antes de excluir");
    console.log(vetor.length);

    console.log("Excluindo ultimo elemento");
    resultado = vetor.pop();
    console.log(resultado); 

        
    console.log("Excluindo primeiro elemento");
    resultado = vetor.shift();
    console.log(resultado); 

    
    console.log(vetor); 
    console.log("Adicionar elemento no final");
    resultado = vetor.push(9,10,11);
    console.log(vetor); 
    console.log(resultado); 


    
    console.log(vetor); 
    console.log("Inverte a ordem");
    resultado = vetor.reverse();
    console.log(vetor); 
    
 
    
    console.log("Criar no array a partir das coordenadas");
    resultado = vetor.slice(3,4);
    
    console.log(resultado); 

    resultado = vetor.toString();
    console.log(resultado); 
    console.log(typeof resultado); 


 /**
  * elementos de callback
   verificar se todos elementos sao pares
   se sim retorna verdadeiro senao falso
  */

  var callback = [2,4,6,12,8,10];
  

   function par(elemento,indice,objeto){

      if(elemento > 9)  
    return (elemento * 2);

    else
      /*return (elemento % 2==0);*/
      return (elemento);

   }
  
    console.log(callback);

    /*se todos obedecerem a regra*/
    resultado = callback.every(par)

    /*se pelo menos um  obedecer a regra*/
    resultado = callback.some(par);

    /*retona elemento modificados pelo callback*/
    resultado = callback.map(par);
  
    console.log(resultado);
  
  
  /**
  * elementos de callback
   verificar se cada elemento e par
   se sim retorna verdadeiro senao falso
  */
  var callback = [2,4,6,7,8,10];
      var txt="";

   function par(elemento,indice,objeto){

    /*teste par*/  
   /* return (elemento % 2==0);*/
    /*teste impar*/  
    /*return (elemento % 2!=0);*/

    txt += "vetor[ " + indice + "] = " + elemento + "\n";

   }
  
    console.log(callback);

    /*resultado = callback.filter(par)
    
    resultado = callback.forEach(par)*/
    
    callback.forEach(par);
    
  
    console.log(txt);





