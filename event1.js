function run2(){
    console.log('2 seconds');
}
function run1(){
    console.log('1 seconds');
}

console.log('start');

setTimeout(run2,2000);
setTimeout(run1,1000);
console.log('end');
