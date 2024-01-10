// Pilhas sao estruturas de dados onde o ultimo e a base e o primeiro e o topo seguindo o conceito de LIFO (last in first out)

class Stack {
  constructor() {
    this.items = []
    pushElement(this.items)
    popElement(this.items)
    peekElement(this.items)
    sizeElement(this.items)
  }
}

// Adicionar ao topo da pilha
function pushElement(element) {
  return element.push(element)
}

// Remover do topo da pilha
function popElement(element) {
  return element.pop()
}

// Verificar qual e o ultimo item da pilha
function peekElement(element) {
  return element[element.length - 1]
}

// Verificar se a pilha esta vazia
function isEmptyElement(element) {
  return element.length === 0
}

// Verificar tamanho da pilha
function sizeElement(element) {
  return element.length
}

// Limpar pilha
function clearElement(element) {
  return element = []
}

