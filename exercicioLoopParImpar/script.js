let i=0;

for(i=0; i<=50;i++){
    if(i % 2 == 0){
        console.log(`PAR: ${i}`)
    }else{
        console.log(`IMPAR: ${i}`)    }


}

//NUMEROS PRIMOS

let num = 10;
let  divisores = 0;

for(let i =1; i<= num; i++){
    if(num % i == 0){
        divisores++;
    }
}

if(divisores == 2){
    console.log( `O número ${num} é primo!`);
}else{
    console.log(`O número ${num} não é primo!`)
}





    
   