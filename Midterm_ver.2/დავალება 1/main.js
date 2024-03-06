let a = prompt("Enter First Number: ");
while(a === null ||isNaN(a) || a === ""){
    alert("Incorect Input");
    a = prompt("please, Enter numeric values!");
}
let b = prompt("Enter Second Number: ");
while(b === null ||isNaN(b) || b === ""){
    alert("Incorect Input");
    b = prompt("please, Enter numeric values!");
}

a = Number(a);
b = Number(b);

const allowedOperations = ["+", "-", "*", "/", "**", "%"];

let operation = prompt("Enter Arithmetical Operation:");
while(!allowedOperations.includes(operation)){
    alert("Incorect Input");
    operation = prompt("Enter correct arithmetical Operation!");
}

if(operation === '+'){
    alert(a+b);
}
else if(operation === '-'){
    alert(a-b);
}
else if(operation === '*'){
    alert(a*b);
}
else if(operation === '/'){
    alert(a/b);
}
else if(operation === '%'){
    alert(a%b);
}
else if(operation === '**'){
    alert(a**b);
}