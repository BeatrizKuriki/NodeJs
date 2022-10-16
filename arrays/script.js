let arr = [1,4,5,6,7];
let nomes = ['Bia', 'Guilhereme', 'stella', 'igor'];
let bool = [ true, false, true, true];
let misturado = [1, 2, 'Bia', true];

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado);

//podemos acessar o array pelo seu índice

 console.log(nomes[2]);
 console.log (nomes[0]);
 //length -1 pega o último elemento do array
 console.log(arr[arr.length-1]);
 //length - 2 pega o penúltimo e assim por diante 
 console.log(arr[arr.length-2]);

 //PROPRIEDADES DOS ARRAYS

console.log("Propriedades dos arrays");
console.log("--------------------------------------")
let firstName ='Beatriz';
console.log(`O nome tem ${firstName.length} letras`);

let numbers =[1,23,34,5,6,7,8,90];
console.log(`O array tem ${numbers.length} elementos`);


// MÉTODOS SÃO PROPRIEDADE QUE FUNCIONAM COMO FUNÇÕES
//STRINGS E ARRAYS CONTÉM MÉTODOS

let marca = "Nike";
console.log(marca.toUpperCase());

let marca2 = marca.toUpperCase();
console.log(marca2.toLowerCase());

console.log(typeof marca2.toLowerCase);
