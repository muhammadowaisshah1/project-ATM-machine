#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 15000;
const pinCodes = 12345;
const pinanswer = await inquirer_1.default.prompt({
    name: "pin",
    type: "number",
    message: "please Eenter your pin",
});
if (pinanswer.pin == pinCodes) {
    console.log("Correct pin code !");
    const transection = await inquirer_1.default.prompt({
        name: "amount",
        type: "list",
        message: "Please Select Transection",
        choices: ["Withdraw", "Check balance"],
    });
    if (transection.amount == "Withdraw") {
        const conformTransection = await inquirer_1.default.prompt({
            name: "fastCash",
            type: "list",
            message: "Please Select Options",
            choices: ["1000", "2000", "3000", "5000", "10000", "other amount"],
        });
        if (conformTransection.fastCash == "1000") {
            myBalance -= conformTransection.fastCash;
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
        else if (conformTransection.fastCash == "2000") {
            myBalance -= conformTransection.fastCash;
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
        else if (conformTransection.fastCash == "3000") {
            myBalance -= conformTransection.fastCash;
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
        else if (conformTransection.fastCash == "5000") {
            myBalance -= conformTransection.fastCash;
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
        else if (conformTransection.fastCash == "10000") {
            myBalance -= conformTransection.fastCash;
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
        else if (conformTransection.fastCash == "other amount") {
            const otherAmounts = await inquirer_1.default.prompt({
                name: "other",
                type: "number",
                message: "Please Enter Desire amount",
            });
            if (conformTransection.fastCash == "other amount") {
                if (myBalance < otherAmounts.other) {
                    console.log("Insuficient balance");
                }
                else {
                    myBalance -= otherAmounts.other;
                    console.log(`Your Remaininig Balance is: ${myBalance}`);
                }
            }
        }
    }
    if (transection.amount == "Check balance") {
        console.log(`Your Available Balance: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Number");
}
