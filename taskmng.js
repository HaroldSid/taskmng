const prompt = require('prompt-sync')(
    {
    history: require('prompt-sync-history')() //open history file
    });
const fs = require('fs')
let menuS = ['Welcome to your task manager, Press:', '1. to see all your tasks', '2. to add a task', '3. to delete a task', '4. to mark a task as done', '5. to Exit the task manager'];
const tasksjson = JSON.parse(fs.readFileSync('./tasks.json', { encoding: 'utf8', flag: 'r' }));
const tasks = [];
for (i = 0; i < Object.keys(tasksjson).length; i++){
    tasks[i] = tasksjson[i];
}
const menu = () =>
{
    let choice;
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
        let tasksjsonf = `{"${0}":"${tasks[0]}"` 
        for (i = 1; i < tasks.length; i++){
            tasksjsonf += `,"${i}":"${tasks[i]}"`;
        }
        tasksjsonf += `}` 

        fs.writeFile('./tasks.json', tasksjsonf, (err) => {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log("File written successfully\n");
            }
        });
        console.log("bye");
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