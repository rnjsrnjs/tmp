const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age:29, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
 ];

 const between21to30StudentAverage = students   
                                .filter(s=>s.age>=21&&s.age<30)
                                .map(s=>s.english + s.math)
                                .reduce((previous, current, index, array)=>previous + (current/array.length),0)/2;

console.log(between21to30StudentAverage);
