//  Array Methods

//1. length
let arr = [1, 2, 4, 5, 6, 7]
console.log(arr.length);//6

//2. toString()
console.log(arr.toString());//1,2,4,5,6,7

//3. at()
console.log(arr.at(2));//4

//4. join()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join("//"));//Banana//Orange//Apple//Mango

//5.pop()
console.log(fruits.pop());//[ 'Banana', 'Orange', 'Apple' ]

//6.push()
fruits.push("kiwi")
console.log(fruits);// [ 'Banana', 'Orange', 'Apple', 'kiwi' ]

//7.shift()
fruits.shift()
console.log(fruits);//[ 'Orange', 'Apple', 'kiwi' ]

//8.unshift()
fruits.unshift("Watermelon")
console.log(fruits);//[ 'Watermelon', 'Orange', 'Apple', 'kiwi' ]

//9.concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myBoys.concat(myGirls));//[ 'Emil', 'Tobias', 'Linus', 'Cecilie', 'Lone' ]

//10. flat()
const myArr = [[1,2],[3,4],[5,6]];
console.log( myArr.flat());//[ 1, 2, 3, 4, 5, 6 ]

//11.splice()
fruits.splice(2, 2, "Lemon", "Kiwi")
console.log(fruits);//[ 'Watermelon', 'Orange', 'Lemon', 'Kiwi' ]

//12.slice()
console.log(fruits.slice(2,3));//[ 'Lemon' ]

//13.map()
let a = [1,2,3,4,5]
console.log(a.map((x)=>{
    return(x);// [1,2,3,4,5]
}));

//14.forEach()
a.forEach((x)=>{
    console.log(x);// 1 2 3 4 5
})

//15.filter()
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);//[ 32, 33, 40 ]

//16.reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);//10
