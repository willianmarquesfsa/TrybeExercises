let apostas = [15,32,52,45,10,11];
let sorteioF = [];
let numerosacertados=0;

function  sorteio() {
   for(let numSort = 0; numSort<6; numSort = numSort+1){
      sorteioF.push(Math.floor(Math.random()*60) +1) 
    }   
}
function buscarSortudo(){
    for(let varbuscsort=0; varbuscsort < 4; varbuscsort=varbuscsort+1){
        
        if(apostas.indexOf(sorteioF[varbuscsort])==0){            
            numerosacertados = numerosacertados + 1
        }         
    } 
}
sorteio()
buscarSortudo()
console.log("Aposta: " + apostas)
console.log("Numeros Sorteados: " + sorteioF)
console.log("Numeros acertados: " + numerosacertados)