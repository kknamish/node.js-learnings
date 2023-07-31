
const add = (num1, num2, callback) => {
    setTimeout(() => {
        const result = num1 + num2;
        callback(result);
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum);
})

console.log('Suiii')

