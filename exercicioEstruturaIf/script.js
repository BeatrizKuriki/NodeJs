let idade = 18;

if(idade >= 18){
    console.log("Pode entrar!!")
}else{
    console.log("Não pode entrar você é menor de idade!");
}

const nome = "Beatriz";

if(nome == "Beatriz"){
    console.log("Olá, seja bem vinda,", nome)
}

let idade2 = 25;
let cnh = true;

if(idade >=18 && cnh == false){
    console.log(`Você tem ${idade2} mas não possui cnh, sinto muito você não pode dirigir!! =[`)
}else if(idade2 >=18 && cnh ==true) {
    console.log(`Parabéns você tem ${idade2} e possui CNH, pode dirigir!! :)`)
} else {
    console.log(`Infelizmente você tem ${idade2} e não possui cnh, não dirigir`)   
    
}