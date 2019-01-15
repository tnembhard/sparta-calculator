

var cal1 = prompt("Do you wish to use the basic or advanced calculator?");

if (cal1 === "basic") {
    basicCalculator();    
} else {
    advancedCalculator();
}

function basicCalculator (){
    var sum = 0;
    var basicCal = true;
    while (basicCal===true) {
        var num1 = parseInt(prompt("Enter Number: "));
        var select = prompt("Choose selectors +, -, *, /.");
        var num2 = parseInt(prompt("Enter Number: "));
        if (select === "+") {
            sum = num1 + num2;       
        } else if (select === "-"){
            sum = num1-num2;  
        } else if (select === "/"){
            sum = num1/num2;  
        } else if (select === "*"){
            sum = num1*num2;  
        } else {
            alert("Invalid Input");
        } 
        confirm(`Result is ${sum}`);

        var prompt1 = prompt("If you wish to exit, type in yes.")
            if (prompt1 === "yes") {
                basicCal = false;
            }
    }        
}

function advancedCalculator (){
var cal2 = prompt("BMI Calculator or Celsius Converter");
    if (cal2 === "bmi") {
        bmiCalculator();    
    } else {
        celciusConverter();
    }
    
    function bmiCalculator(){
        var bmiCal = true;
        while (bmiCal===true) {
            var num1 = parseFloat(prompt("Your Height in m: "));
            var num2 = parseFloat(prompt("Your Weight in kg: "));
            num1 = num1 * num1;
            var sum = num2/num1;
            confirm(`Result is ${sum}`);            
            var prompt1 = prompt("If you wish to exit, type in yes.");
            if (prompt1 === "yes") {
                bmiCal = false;
            }
        }
    }
    function celciusConverter(){
        var bmiCal = true;
        while (bmiCal===true) {
            var num1 = parseInt(prompt("Enter the celcius degree: "));
            var num2
            num1 = (num1*1.8)+32;            
            confirm(`Result is ${num1} degree fahrenheit`);          
            var prompt1 = prompt("If you wish to exit, type in yes.")
            if (prompt1 === "yes") {
                bmiCal = false;
            }
        }
    }
}
