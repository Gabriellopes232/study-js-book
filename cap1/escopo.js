let myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    var myVarLocal = 'local';
    return myVarLocal
}

function myOtherFunction() {
  myOtherVarLocal = 'local'
  return myOtherVarLocal;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}
console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}