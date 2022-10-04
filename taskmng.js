const prompt = require('prompt-sync')();
function menu()
{
    let a = prompt("Welcome to your task manager, Press:\n 1. to see all your tasks\n 2. to add a task\n 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager");
    if (a == 1)
    {
        seetask();
    }
    else if (a == 2)
    {
        addtask();
    }
    else if (a == 3)
    {
        deletetask();
    }
    else if (a == 4)
    {
        validatetask();
    }
    else if (a == 5)
    {
        exitMenu();
    }
}
function seetask()
{
    prompt('task 1');
    menu();
}
function addtask()
{
    prompt('what is your task');
    menu();
}
function deletetask()
{
    prompt('delete');
    menu();
}
function validatetask()
{
    prompt('ok?');
    menu();
}
function exitMenu()
{
    let a = "bye";
    return a;
}
function test()
{
    //let a = prompt("je m'appelle harold \n et j'aime le pain");
    return "bye";
}
console.log(test());