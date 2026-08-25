//calculator logic
let num1= 30;
let num2 = 10;
let operator = "/";
if(operator === "+"){
    console.log(num1+num2);
}
else if(operator === "-"){
    console.log(num1-num2);
}
else if(operator === "*"){
    console.log(num1*num2);
}
else if(operator === "/"){
    if(num2!=0){
    console.log(num1/num2);
    }
    else{
        console.log("num2 cannot be zero");
    }
}
else if(operator === "%"){
    if(num2!=0){
    console.log(num1%num2);
    }
    else{
        console.log("It is not a Number");
    }
}
else{
    console.log("Invalid Operator");
}

/////////////////////////////////////////

//task-4

let marks = 95;
let bonus = 5;
let grade;
let result;
let remark;
if(marks<80){
marks+=bonus; //assignment operator
} 
if(marks>=90 && marks<=100){
    grade = "A";
}
else if(marks>=70 && marks<=89){
    grade = "B";
}
else if(marks>=50 && marks<=69){
    grade ="C";
}
else{
    grade = "F";
}
//ternary operator
result = marks>=50?"Pass":"fail";
//switch
switch(grade){
    case "A":
        remark="Excellent!";
        break;
    case "B":
        remark="Good";
        break;
    case "C":
        remark="Average";
        break;
    case "F":
        remark="Needs Improvement";
        break;
}
console.log(marks);
console.log(grade);
console.log(result);
console.log(remark);


