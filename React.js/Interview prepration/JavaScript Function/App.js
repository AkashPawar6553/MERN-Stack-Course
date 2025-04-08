// Asynchronus Example
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("Basicaly Asynchronus is that is executed after a certain amount of time has passed.");
}, 5000);

console.log("three");
console.log("four");

//  CallBack Example

function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumcallback) {
    sumcallback(a , b);

}
calculator(5, 10, sum);

let promise = new Promise((resolve, reject) => {

    console.log("I am a promise");
    // resolve("Success");
   reject("some Error");

})

function getData(dataId,getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
            if (grtNextData){
                getNextData();
            }
        },4000);

    })
} 

function api () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Wether data");  
      resolve(200);
      },3000);
    });
}

async function getWetherData() {
    await api();
}