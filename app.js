import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 2005;
console.log("Welcome to my ATM MACHINE");
let pinAnswer = inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "ENTER YOUR PIN CODE:"
    }
]).then((pinAnswer) => {
    if (pinAnswer.pin === myPin) {
        console.log("YOUR PIN IS CORRECT, LOGIN SUCCESSFULLY!");
        inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Select an operation:",
                choices: ["Withdraw Amount", "Check Balance"]
            }
        ]).then((operationAnswer) => {
            if (operationAnswer.operation === "Withdraw Amount") {
                inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "ENTER THE AMOUNT TO WITHDRAW:"
                    }
                ]).then((amountAns) => {
                    if (amountAns.amount > myBalance) {
                        console.log("Insufficient Balance");
                    }
                    else {
                        myBalance -= amountAns.amount;
                        console.log(`${amountAns.amount} Withdraw Successfully`);
                        console.log(`YOUR REMAINING BALANCE IS: ${myBalance}`);
                    }
                });
            }
            else if (operationAnswer.operation === "Check Balance") {
                console.log(`YOUR ACCOUNT BALANCE IS: ${myBalance}`);
            }
        });
    }
    else {
        console.log("YOUR PIN IS INCORRECT!");
    }
});
