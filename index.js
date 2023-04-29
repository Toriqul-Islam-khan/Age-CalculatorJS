var marks = parseInt(prompt("Enter Your Markes"), 10);
if (marks >= 80) {
    document.write("A+");
}
else if (marks >= 75 && marks <= 79) {
    document.write("A");
}
else if (marks >= 70 && marks <= 74) {
    document.write("A-");
}
else if (marks >= 65 && marks <= 69) {
    document.write("B+");
}
else if (marks >= 60 && marks <= 64) {
    document.write("B");
}
else if (marks >= 55 && marks <= 59) {
    document.write("B-");
}
else if (marks >= 50 && marks <= 54) {
    document.write("C+");
}
else if (marks >= 45 && marks <= 49) {
    document.write("C");
}
else if (marks >= 40 && marks <= 44) {
    document.write("C-");
}
else {
    document.write("Failed Or F");
}
document.getElementById("result").innerHTML = "Your Grade is = ";