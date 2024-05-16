function a(){
    let b=20
    function c(){
        return b;
    }
    return c;
}
let result = a()
console.log(result());//20