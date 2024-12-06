var user={
    name:'sung',
    gender:'male'
};
var changeName = function(user,newname){
    return {
        name:newname,
        gender: user.gender
    }
}

var user2 = changeName(user,'sung-dong');
if(user !=user2){
    console.log('변경');
}
console.log(user.name, user2.name);
console.log(user === user2);
