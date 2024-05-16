function abb(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}

function cal(a,b,task){ //higher order functions
    let result = task(a,b)
    return result;
}

let a = cal(2,4,abb)
console.log(a);