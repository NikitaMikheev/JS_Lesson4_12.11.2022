/* ФУНКЦИИ */
/*
let userOne = {
    role: "admin",
    firstName: "Никита"
}

function checkAccess(user, role) {
    return user.role === role; 
}

function showWelcomeMessage(user) {
    console.log("#################");
    console.log(`# Hello, ${user.firstName} #`);
    console.log("################");
}


function showError(user) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(`! Доступ запрещен, ${user.firstName} !`);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

const result = checkAccess(userOne, 'admin');

if (result) {
    showWelcomeMessage(userOne) }

else {
    showError(userOne) }

*/

/* ЗАДАЧА 1 */

let userName = "";

function checkUser(name) {
    if (name) {
        console.log(`Добро пожаловать, ${name}!`);;
    }
    else {
    console.log(`Добро пожаловать, гость!`); }
}

checkUser(userName);


/* ЗАДАЧА 2 */

let firstValue = 25;
let degree = 3;

function exponentiation(firstValue, degree) {
    return firstValue**degree;
}

let result = exponentiation(firstValue, degree)
console.log(result);