const prompt = require('prompt-sync')(
    {
    history: require('prompt-sync-history')() //open history file
});
/*const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function saveH()
{
    prompt.history.save();
}
console.log(test())
function testrl()
{
    rl.question("What is your name? ", function(answer) {
        console.log(`Oh, so your name is ${answer}`)
    });
}*/
let menuS = ['Welcome to your task manager, Press:', '1. to see all your tasks', '2. to add a task', '3. to delete a task', '4. to mark a task as done', '5. to Exit the task manager'];
let tasks = [];
let choice;
function menu()
{
    console.log(menuS)
    choice = parseFloat(prompt());
    if (choice == 1)
    {
        seetask();
    }
    else if (choice == 2)
    {
        addtask();
    }
    else if (choice == 3)
    {
        deletetask();
    }
    else if (choice == 4)
    {
        validatetask();
    }
    else 
    {
        console.log("by");
    }
}
function seetask()
{
    for (let i = 0; i < tasks.length; i++)
    {
        console.log(i+1 + ": " + tasks[i]);
    }
    menu();
}
function addtask()
{
    tasks.push(prompt('what is your task? --> '));
    menu();
}
function deletetask()
{
    let del = prompt('What task do you want to delete? -->') - 1;
    tasks.splice(del, 1);
    menu();
}
function validatetask()
{
    let val = prompt('What task do you want to validate? -->') - 1;
    tasks.splice(val, 1, tasks[val] + ' done!');
    menu();
}
menu();