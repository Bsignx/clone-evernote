// const perimetro = new Function('lado', 'return lado * 4');


// function somar(n1, n2, n4) {
//   return n1 + n2;
// }

// console.log(somar.name)

// function darOi(nome, idade) {
//   console.log('Oi para você ' + nome + idade)
// }

// darOi.call(null, 'André', 28);

// window.marca = 'Carro';
// window.ano = 288

// function descricaoCarro(velocidade) {
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano + velocidade);
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];


// carros.forEach.call(frutas, (item) => {
//   console.log(item)
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');


// const ul = new Dom('ul');




// ul.ativo.call(li, 'ativo');
// ul.ativo('ativar');


const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
}

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro());

console.log(li)

const numeros = [33,232, 33,434,54,5424, 4];

const $ = document.querySelectorAll.bind(document);


const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(30))

// console.log(carro)