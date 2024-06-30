import inquirer from "inquirer";
let my_balance = 100000;
let my_pin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter the pin",
        type: "number",
    }
]);
if (pinanswer.pin === my_pin) {
    console.log("correct pin code");
    let operationsans = await inquirer.prompt([
        {
            name: "operations",
            message: "please select the option",
            type: "list",
            choices: ["withdraw", "check balance", "fast_cash"]
        }
    ]);
    if (operationsans.operations === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount",
                type: "number"
            }
        ]);
        my_balance -= amountans.amount;
        console.log(`your reming balance is${my_balance}`);
    }
    else if (operationsans.operations === "check balance")
        console.log(`you current balance is${my_balance}`);
    else if (operationsans.operations === "fast_cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fast_cash",
                message: "select the options",
                type: "list",
                choices: ["500", "1000", "2000", "5000",]
            }
        ]);
        my_balance -= fastcash.fast_cash;
        console.log(`my remaning balance balce is${my_balance}`);
    }
    else {
        console.log("incorrect pin code");
    }
}
