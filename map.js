const listEmployee =[
    {name:'kms',age:24,salary:5000},
    {name:'kss',age:24,salary:5000},
    {name:'kjs',age:24,salary:5000},

];
const raisedSalaryList = listEmployee.map(e=>e.salary*1.1);
raisedSalaryList.forEach(s=>console.log(`salary:${s}`));
raisedSalaryList.forEach(s=>console.log(s));
