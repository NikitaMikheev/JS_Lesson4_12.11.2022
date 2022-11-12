/* ФУНКЦИИ */

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