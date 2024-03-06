let expression = prompt("Enter Your Two operand arithmetical operatin. \nfor example a+b(without spaces)");
while(expression === null || expression === ""){
    alert("Incorect Input");
    expression = prompt("please, Enter correct expression!");
}

let components = expression.split("");

let a = parseInt(components[0]); 
let operation = components[1]; 
let b = parseInt(components[2]);

let myArray = [];

if(operation === '+') {
    answer = (a + b);
}
else if(operation === '-'){
    answer = (a - b);
}
else if(operation === '*') {
    answer = (a * b);
}
else if(operation === '/') {
    answer = (a / b);
}
else if(operation === '%'){
    answer = (a % b);
}
else if(operation === '**'){
    answer = (a ** b);
}

let userInput = Number(prompt("Enter answer: "));
while(userInput === null || isNaN(userInput) || userInput === ""){
    alert("Incorect Input");
    userInput = prompt("please, Enter numeric values!");
}

if(answer == userInput){
    alert("You are Right!");
}
else if(answer != userInput){
    for(let i = 0; i < 5; i++){
        myArray.push(userInput);
        attempt = 5 - i;
        userInput = prompt("try again! You Have "+attempt+" attempt!");
        if(userInput == answer){
            i = 4;
            alert("finally");
        }
        else if(i == 4){
            alert("You Failed \nTry Again!");
        }
    }
    alert("Your attempts "+myArray);
}







