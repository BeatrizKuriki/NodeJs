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