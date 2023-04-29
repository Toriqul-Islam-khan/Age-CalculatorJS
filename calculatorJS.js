var x, y, Add, Sub, Mul, Div;
x = parseInt(prompt("Enter the value of X= "), 10);
y = parseInt(prompt("Enter the value of y= "), 10);

Add = x + y;
Sub = x - y;
Mul = x * y;
Div = x / y;
document.getElementById("h").innerHTML = "Mathematical operations on X= " + x + " and Y= " + y;
document.getElementById("Math").innerHTML = "Addition of X and Y is = " + Add;
document.getElementById("Math2").innerHTML = "Subtraction of X and Y is = " + Sub;
document.getElementById("Math3").innerHTML = "Multiplication of X and Y is = " + Mul;
document.getElementById("Math4").innerHTML = "Division of X and Y is = " + Div;