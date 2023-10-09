let numbers = [0, 1, 2, 3, 4, 5];

numbers[numbers.length] = 6

// adicionando no fim do array
numbers.push(7)
numbers.push(8, 9)

console.log(numbers)

Array.prototype.insertFirstPosition = function(value) {
  for(let i = this.length; i >= 0; i--){
    this[i] = this[i - 1]
  }

  this[0] = value
}

numbers.insertFirstPosition(-1)


// adicionando no inicio do array
numbers.unshift(-2)

numbers.unshift(-4, -3)


// removendo no fim do array
numbers.pop()

for(let i = 0; i < numbers.length; i++){
  numbers[i] = numbers[i + 1]
}

