function primeNumber(a) {
    if (a > 1) {
        if (a === 2)
            return "YES";
        for (var i = 2; i < a; i++) {
            if (a % i === 0) {
                return "NO";
            }
            else {
                return "YES";
            }
        }
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//ณัชชา คำปวง 660610751
