function calculate() {
    let a, b;

    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b
    }

    function mul(a, b) {
        return a * b
    }

    function div(a, b) {
        return a / b;
    }

    return { add, sub, mul, div }
}

let cal = calculate();
console.log(cal.add(5, 3))
console.log(cal.sub(5, 3));