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

//exemplo de escopo
let n =10;

function imprimir(){
    let n = 150;
    console.log(n);
}

imprimir();

console.log(n);

let consoleTeste = () => {
    console.log("olá, mundo!");
};

consoleTeste();

let soma = (a,b) => {
    return a+b

}

console.log(soma(2,5));

const multiplicarPorDois =(x) =>{
    return x *2;
}

console.log(multiplicarPorDois(2));

// fazendo a função mais enxuta

const multiplicarPorDois2 = x => x*2;
console.log(multiplicarPorDois2(5));

//função recursiva
function recursao(j){
    if(j -1 < 2){
        console.log("Recursão parou");
    }else if( j % 2 != 0){
        console.log("Número impar");
        recursao(j - 1)
    }else{
        console.log("Número par")
        recursao(j - 2)
    }
}
recursao(39);
recursao(10);
recursao(50);