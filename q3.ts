function primeNumber(a: number) {
  if(a > 1){
    if(a === 2) return "YES";
    
    for(let i = 2; i < a; i++){
      if(a % i === 0){
        return "NO";
      }
      else{
        return "YES";
      }
    }
  }
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

//ณัชชา คำปวง 660610751