#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber: number = Math.floor( 10000 + Math.random() * 80000)

let myBalance : number = 0

console.log("Wellcome to 'Maham Shahid' - Student Management System");

let answer = await inquirer.prompt (
    [
        {
            name: "students",
            type: "input",
            message: "Enter Student's Name:",           
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;

                }
                return "Please do not enter empty value!"
            },

        },
        {
            name: "courses",
            type: "list",
            message: "select the course for enroll ?",
            choices: ["HTML","CSS","JAVASCRIPT","TYPESCRIPT","PYTHON"]
        }
    ]
);
const AcademyFee: {[key:string]: number} = {              
    "HTML": 3000,
    "CSS": 5000,
    "JAVASCRIPT": 10000,
    "TYPESCRIPT": 15000,
    "PYTHON": 20000
};
console.log(`\nAcademy fees: ${AcademyFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);


let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "select payment methoud!",
            choices: ["Banktransfer","Easypaisa","Jazzcash",]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money!",
            validate: function(value){
                if (value.trim() !== "") {
                    return true;
                }
                return "Please don't enter empty value!"
            },
        }
    ]
);
console.log(`\nyou selected payment methoud ${paymentType.payment}\n`);

const AcademyFees = AcademyFee[answer.courses]

const paymentAmount = parseFloat(paymentType.amount);      
    
if (AcademyFees === paymentAmount) {
    console.log(`Congratulations, You Are Successfully Enrolled In ${answer.courses}.\n`);
    
let ans = await inquirer.prompt (
    [
        {
            name: "select",
            type: "list",
            message: "What would you like to do for the next?",
            choices: ["view status","Exit"]
        }
    ]
);
if (ans.select === "view status") {
    console.log("\n***^**^STATUS^**^****\n");
    console.log(`student Name: ${answer.students}`);
    console.log(`student ID: ${randomNumber}`);
    console.log(`cours: ${answer.courses}`);
    console.log(`tuition fees paid: ${paymentAmount}`);
    console.log(`Balance ${myBalance += paymentAmount}`);
    
    }
    else{
        console.log("\n *^Exiting Student Management System*^ ");
        
    }

}  else{
    console.log("Invalid Amount Due To Course");
    
};