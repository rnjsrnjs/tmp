const students=[
    {name:'kms',age:45,score:67},
    {name:'kkk',age:65,score:17},
    {name:'kss',age:95,score:87}
];

const scores = students.map(s=>s.score);
console.log(scores);

const sum = scores.reduce((a,b)=>a+b,0);
console.log(`sum:${sum}`);

const sum2 = students.map(s=>s.score)
                        .reduce((a,b)=>a+b);
console.log(sum2);

