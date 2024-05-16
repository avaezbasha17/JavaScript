function a(){
    return new Promise((reslove,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((data)=>data.json())
        .then((data)=>reslove(data))
        .catch((err)=>console.log(err))
    })
}

async function display(){
    console.log("Start");
    let data = await a()
    console.log(data);
    console.log("End");
}

function display1(){
    console.log("Start");
    let data = a()
    console.log(data);
    console.log("End");
}

// display()
// console.log('---------------------');
display1()