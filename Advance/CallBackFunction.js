function cal(a, b, task) {
    let result = task(a, b);
    return result;
}

let add = cal(a, b, function (a, b) {
    return a + b
})
console.log(add);