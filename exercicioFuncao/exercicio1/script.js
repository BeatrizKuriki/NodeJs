
function imprimeIdade (idade){
    console.log(`Você tem ${idade} anos`);
}

imprimeIdade(12);
imprimeIdade(35);
imprimeIdade(28);


function soma(x, y){
    console.log(x+y)
}

soma(2,3);
soma(9,7);
soma(5,7);

function soma1(a,b){
    return a+b
}

console.log(soma1(3,2));

console.log(soma1(5,2));

function numeroAleatorio(num){
    return Math.floor(Math.random() * num) +1 ;
}

console.log(numeroAleatorio(5));
console.log(numeroAleatorio(50));