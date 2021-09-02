n = 5
let ast = "*";
let vac = " "

    for(let ii=0; ii<=5;ii+=1){
        if( 5-ii!==1){
          if(ii%2==0 || ii == 1 || ii==n) {
           console.log(vac.repeat((Math.round(5-ii))/2)+ ast.repeat(ii)+vac.repeat(Math.round(5-ii)/2))
        }
    }
       
        

    
}

/*

*
**
***
****
*****
*/