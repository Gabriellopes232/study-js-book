let movie = 'Lord of the Rings'; // {1}
//var movie = 'Batman v Superman'; // erro, movie já foi declarada
function starWarsFan() {
  const movie = 'Star Wars'; // {2}
  return movie;
}
function marvelFan() {
  movie = 'The Avengers'; // {3}
  return movie;
}
function blizzardFan() {
  const isFan = true;
  let phrase = 'Warcraft'; // {4}
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text'; // {5}
    phrase = 'For the Horde!'; // {6}
    console.log('Inside if: ' + phrase);
  }
  phrase = 'For the Alliance!'; // {7}
  console.log('After if: ' + phrase);
}
console.log(movie); // {8}
console.log(starWarsFan()); // {9}
console.log(marvelFan()); // {10}
console.log(movie); // {11}
blizzardFan(); // {12}


// • Na linha {1}, declaramos uma variável movie cujo valor é Lord of the
// Rings e exibimos o seu valor na linha {8}. Essa variável tem um escopo
// global, conforme vimos na seção Escopo das variáveis no capítulo
// anterior.
// • Na linha {9}, executamos a função starWarsFan. Nessa função,
// também declaramos uma variável chamada movie na linha {2}. A saída
// dessa função é Star Wars porque a variável da linha {2} tem um escopo
// local, o que significa que ela é válida somente dentro dessa função.
// • Na linha {10}, executamos a função marvelFan. Nessa função,
// alteramos o valor da variável movie (linha {3}). Essa variável fez uma
// referência à variável global declarada na linha {1}. É por isso que
// obtivemos a saída The Avengers na linha {10} e na linha {11}, nas
// quais exibimos a variável global.
// • Por fim, executamos a função blizzardFan na linha {12}. Nessa
// função, declaramos uma variável chamada phrase (linha {4}) no escopo
// da função. Então, na linha {5}, declaramos novamente uma variável
// chamada phrase, porém, dessa vez, essa variável tem como escopo
// somente a instrução if.
// • Na linha {6}, alteramos o valor de phrase. Como ainda estamos dentro
// da instrução if, apenas a variável declarada na linha {5} terá o seu valor
// alterado.
// • Em seguida, na linha {7}, alteramos novamente o valor de phrase, mas,
// como não estamos no bloco da instrução if, o valor da variável
// declarada na linha {4} é alterado.
