function printEven() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            for (let i = 0; i <= 20; i++) {
                if (i % 2 == 0) {
                    console.log(i);
                }
            }
            return reslove();
        }, 5000)
    });
}

function successMsg() {
    console.log("SuccessFully Printed");
}

printEven()
    .then(successMsg)
    .catch("Error")