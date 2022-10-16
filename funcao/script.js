function multiplicarTresNumeros(x, y, z){
    return x*y*z
}

console.log(multiplicarTresNumeros(2,3,4));

const multiplica = multiplicarTresNumeros(2,5,3);
console.log(`O valor da constante multiplica é igual a : ${multiplica}`);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir")
    }else{
        console.log("Não pode dirigir!")
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(15, 0));
console.log(podeDirigir(25, 0));
console.log(podeDirigir(30, 1));
console.log(podeDirigir(18, false));