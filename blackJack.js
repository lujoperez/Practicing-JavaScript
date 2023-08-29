
let conteo = 0; 
function conteoCartas (carta){
     let decision;
     switch(carta){
       case 2:
       case 3:
       case 4:
       case 5: 
       case 6: 
        conteo++;
       break;
       case  10:
       case 'J':
       case 'Q':
       case 'K':
       case 'A':
         conteo--;
       break;
     }
     if(conteo > 0){
       decision = "Apostar";
     }else{
       decision = "Esperar"; 
     }
     
     return conteo + " "+ decision; 
}
console.log(conteoCartas(2));
console.log(conteoCartas(2));
console.log(conteoCartas("k"));