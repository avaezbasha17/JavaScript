let [a, b, c] = [10, 20, 30]
console.log(a);

let [x, y, ...z] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(x, y, z);

let name = "Ibrahim"
let age = "23"
let id = 25

let person = {
    name,
    age,
    id
}
console.log({ name, id, age });