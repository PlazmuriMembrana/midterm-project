let input = Number(prompt("Enter Amount attempts: "));
while(input === null ||isNaN(input) || input === ""){
    alert("Incorect Input");
    input = prompt("please, Enter numeric values!");
}
let num = prompt("guess the number!");
while(num === null ||isNaN(num) || num === ""){
    alert("Incorect Input");
    num = prompt("please, Enter numeric values!");
}

let secret = Math.floor(Math.random() * 1000);
let attempts = (input - 1);

for(let i = 0; i < attempts; i++){
    if(1>num){
        alert("number can not be negative or equal to zero!");
        num = prompt("enter value");
    }
    else if(num>1000){
        alert("number can not be more than 1000!");
        num = prompt("enter value");
    }
    else if(num>secret)
    {
    	num = prompt("secret number is less than "+num);
        while(num === null ||isNaN(num) || num === ""){
            alert("Incorect Input");
            num = prompt("please, Enter numeric values!");
        }
    }
    else if(num<secret)
    {
    	num = prompt("secret number is greater than "+num);
        while(num === null ||isNaN(num) || num === ""){
            alert("Incorect Input");
            num = prompt("please, Enter numeric values!");
        }
    }
    
if(secret == num)
    {
    	alert("You Won!! \nYour Number Was "+secret+"\nattempts needed "+(i-1));
        break;
    }
}
if(num != secret){
    alert("You Lost!! \nYour Number Was "+secret+"\nattempts used "+input);
}