let results = [];
let keepGoing = true;

document.write("<table>");
document.write("<tr>");
document.write("<th>x</th>");
document.write("<th>op</th>");
document.write("<th>y</th>");
document.write("<th>result</th>");
document.write("</tr>");

while (keepGoing) {
    let x = prompt("Enter A number:");
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    let y = prompt("Enter The next number:");

    let result;
    let valid = true;

    // Check for non-numeric input
    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
        valid = false;
    }
    // Check the operator
    else if (
        operator !== "+" &&
        operator !== "-" &&
        operator !== "*" &&
        operator !== "/" &&
        operator !== "%"
    ) {
        result = "computation error";
        valid = false;
    }
    else {
        x = Number(x);
        y = Number(y);

        if (operator === "+") {
            result = x + y;
        }
        else if (operator === "-") {
            result = x - y;
        }
        else if (operator === "*") {
            result = x * y;
        }
        else if (operator === "/") {
            result = x / y;
        }
        else if (operator === "%") {
            result = x % y;
        }

        results.push(result);
    }

    // Add row to table
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");

    // Ask whether to continue
    keepGoing = confirm("Click OK to continue or Cancel to stop.");
}

document.write("</table>");

// Summary table
if (results.length > 0) {
    let total = 0;
    let min = results[0];
    let max = results[0];

    for (let i = 0; i < results.length; i++) {
        total += results[i];

        if (results[i] < min) {
            min = results[i];
        }

        if (results[i] > max) {
            max = results[i];
        }
    }

    let average = total / results.length;

    document.write("<table>");
    document.write("<tr>");
    document.write("<th>Min</th>");
    document.write("<th>Max</th>");
    document.write("<th>Average</th>");
    document.write("<th>Total</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + average + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");

    document.write("</table>");
}