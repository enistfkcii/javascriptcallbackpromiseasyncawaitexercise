const {default : axios} = require("axios");
//CALLBACK => () => {} bu yapı aslında callback yapısıdır.

// console.log(1);

// const callbackFunc = (num,callback) => {
//     setTimeout(() => {
//         callback(num)
//     },4000)
// }
// const newVal = callbackFunc(2,(_newVal) => {
//     console.log(_newVal);
// })

// console.log(3);


//PROMISE => 
// const promiseFunc = (num) => {
// return new Promise((resolve,reject) => {
//     let settings = true
//     setTimeout(() => {
//        if(settings) resolve(num)
//        else reject(new Error('Hatalı İşlem')) 
//     }, 3000);
// })
// }
// const promiseFunc2 = (num) => {
//     return new Promise((resolve,reject) => {
//         let settings = true
//         setTimeout(() => {
//            if(settings) resolve(num)
//            else reject(new Error('Hatalı İşlem')) 
//         }, 1000);
//     })
//     }
// promiseFunc(55).then((pr => console.log(pr))).catch(err => console.log(err))
// promiseFunc2(55.55).then((pr => console.log(pr))).catch(err => console.log(err))




// //Promise.all kullanımı ayrı ayrı promiseları tek bir yerden kullanmak.

// Promise.all([
//     promiseFunc(5522) , promiseFunc2(55.55)]).then((pr=> {
//         console.log(pr[0])
//         console.log(pr[1])
//     })).catch(err => console.log(err))

// //Promise.allSettled kullanımı da hem valuelarını hem de statulerini bize bir obje gibi getirir.

// Promise.allSettled([
//     promiseFunc(5522) , promiseFunc2(55.55)]).then((pr=> {
//         console.log(pr[0])
//         console.log(pr[1])
//     })).catch(err => console.log(err))

// //Promise.race ve Promise.any kullanmı da iki promiseden hangisi daha hızlı çalışıp dönüyorsa onu bize verir.

// Promise.race([
//     promiseFunc(5522) , promiseFunc2(55.55)]).then((pr=> {
//         console.log(pr)
//     })).catch(err => console.log(err))


//ASYNC - AWAIT 
//https://restcountries.com/v3.1/all

const asyncFunc = async () => {
    const fetchData = await axios.get("https://restcountries.com/v3.1/all")
    console.log(fetchData);
}
asyncFunc()