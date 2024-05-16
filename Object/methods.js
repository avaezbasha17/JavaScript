let obj = {
    name: "Avaez",
    age: 24,
    phoneNumber: 7019720072,
    address: {
        city: "Shimoga",
        area: "Gopala Gowda",
        pinCode: 577201
    }
}

console.log(Object.keys(obj));
console.log(Object.keys(obj.address));

console.log(Object.values(obj));
console.log(Object.values(obj.address));

console.log(Object.entries(obj));
console.log(Object.entries(obj.address));