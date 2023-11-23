//CALLBACK => () => {} bu yapı aslında callback yapısıdır.

console.log(1);

const callbackFunc = (num,callback) => {
    setTimeout(() => {
        callback(num)
    },4000)
}
const newVal = callbackFunc(2,(_newVal) => {
    console.log(_newVal);
})

console.log(3);

