import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    { message: "Enter your first number:", type: "number", name: "firstnumber" },
    { message: "Enter your second number:", type: "number", name: "secondnumber" },
    {
        message: "Which airthmetic operator do you need:",
        type: "list",
        choices: ["Addition", "Subtraction", "Multipilcation", "Division"],
        name: "operator"
    }
]);
// making a conditional statement for different airthmetic operator
if (calculator.operator == "Addition")
    console.log("The answer of addition is:", calculator.firstnumber + calculator.secondnumber);
else if (calculator.operator == "Subtration")
    console.log("The answer of subtraction is:", calculator.firstnumber - calculator.secondnumber);
else if (calculator.operator == "Multipilcation")
    console.log("The answer of Multipilcation is:", calculator.firstnumber * calculator.secondnumber);
else if (calculator.operator == "Division")
    console.log("The answer of Division is:", calculator.firstnumber / calculator.secondnumber);
else
    console.log("plz choose operator to operate next time :)");
