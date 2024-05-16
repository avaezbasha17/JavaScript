//  String Methods

//1. Length
let stringMethod = "Hello World"
console.log(stringMethod.length); //11

//2. charAt()
console.log(stringMethod.charAt(2));//l

//3. Slice() it will the slice of string, last index value will be ignored
console.log(stringMethod.slice(1,4));//ell

//4. SubString()
console.log(stringMethod.substring(1,4));//ell

//5. upperCase()
console.log(stringMethod.toUpperCase());//HELLO WORLD

//6. lowerCase()
console.log(stringMethod.toLowerCase());//hello world

//7. conCat() merge two array
let a = "Hello"
let b = "World"
console.log(a.concat(" ",b));

//8. trim() remove the whiteSpace
let text1 = "      Hello World!      ";
let text2 = text1.trim();//Hello World

//9. padStart()  Pad a string with "0" until it reaches the length 4:
let text = "5";
console.log(text.padStart(4,"0"));//0005

//10. padEnd() 
console.log(text.padEnd(4,"0"));//5000

//11. Split()
let text3 = "a,b,c,d,e,f";
console.log(text3.split(','));//[ 'a', 'b', 'c', 'd', 'e', 'f' ]

//12. indexOf()
console.log(stringMethod.indexOf("l"));//2
 
