// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] = 'Kia';

// console.log(carros.length)

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li)

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 4,
// }

// const objArray = Array.from(obj);

// console.log(li)
// console.log(arrayLi)

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[2][0].length)

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32,21,33,43,1,12,8];
// idades.sort();

// console.log(instrumentos)
// console.log(idades)

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');
const novaArray = carros.push('Parati', 'Gol');

// console.log(novaArray)

// console.log(carros);

// console.log(carros.shift())

// console.log(carros);
// console.log(carros.splice(2,4,'Fusca'))

// console.log(carros);

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2));

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 3));

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];


// let htmlString = '<h2>Título Principal</h2>';
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('h1')

// console.log(htmlString)

const linguagens = ['html', 'css', 'js', 'php', 'python'];

const cloneLinguagens = linguagens.slice();

console.log(linguagens.pop())
console.log(linguagens)
console.log(cloneLinguagens)