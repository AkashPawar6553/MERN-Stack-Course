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