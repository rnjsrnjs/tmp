let fs = require('fs');
let data = fs.readFile('../WP/12-1.html', 'utf-8',
function(err, data) {
if (err == null) {
console.log(data);
} else {
console.log('error !!!');
}
});
console.log('file read request !!!');
