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

console.log(obj.name);
console.log(obj.age);
console.log(obj.phoneNumber);
console.log(obj.address);

console.log(obj.address.city);
console.log(obj.address.area);
console.log(obj.address.pinCode);

obj.name = "Avaez Basha"
console.log(obj);

delete obj.age

console.log(obj);