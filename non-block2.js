function longRunningTask(){
    console.log('end');
}

console.log('start');
setTimeout(longRunningTask,0);
console.log('next job');
