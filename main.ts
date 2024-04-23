#!/usr/bin/env node

import inquirer from "inquirer";
let Balance= 5000;
let pin= 6789;
let pinanswer= await inquirer.prompt([
    {
        name: "pincode",
        message: "Enter your pin",
        type: "number"

    }
])

if (pinanswer.pincode===pin){
    console.log("You have entered the right pin")

    let Atmoperation= await inquirer.prompt([
        {
            name: "operation",
            message: "Kindly select the option",
            type: "list",
            choices: ["Balance Inquiry", "Amount Withdraw"]
        }
    ])

    if (Atmoperation.operation=== "Amount Withdraw"){
        let amountanswer= await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]
    );

        
         Balance -= amountanswer.amount
         console.log(`Your remaining balance is ${Balance}`)
         
        
    }
    else if(Atmoperation.operation=== "Balance Inquiry"){
        console.log(`Your remaining balance is ${Balance}` )
    }
        
}
else{
    console.log("You have entered the wrong pin")
}

