//métodos são propriedades que funcionam como funções;
//Strings Arrays contém arrays;

let marca = 'nike';

console.log(typeof marca.toUpperCase);
console.log(typeof marca.toUpperCase());
console.log(marca.toUpperCase());

//OBJETOS EM JAVASCRIPT
//QUANDO VC VER [] É ARRAY E QUANDO VC VIR {} É OBJETO.
//[] ARRAY 
//{} OBJ

let pessoa = {
    nome : "Beatriz",
    profissao : "Programadora",
    idade : 35,
    programar : function(){
        console.log("Parabéns!!!");
    }
}

console.log(pessoa.profissao);
console.log(pessoa.idade);
console.log(pessoa.programar());

//QUANDO CRIAMOS OBJETOS PODEMOS ADICIONAR E DELETAR PROPRIEDADES AO LONGO DO PROGRAMA

let carro = {
    marca : "VW",
    portas : 4,
    eletrico : false,
    motor : 1.0
}

console.log(carro.eletrico);

console.log("-------------------------")
console.log(carro.eletrico);

//carro.coloracao = preta;

//console.log(carro.coloracai);

console.log(carro);
