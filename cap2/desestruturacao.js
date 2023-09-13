let [x, y] = ['a', 'b'];// destructuring

[x, y] = [y, x]; // swap

let [h, j] = ['a', 'b'];

let obj = { h, j } // shorthand method


console.log(obj)

const hello = { // shorthand method names
  name: 'abc',
  printHello() {
    console.log('Hello')
  }
}

console.log(hello.printHello());

