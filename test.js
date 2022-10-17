const prompt = require('prompt-sync')(
    {
        history: require('prompt-sync-history')() //open history file
    });
const fs = require('fs')
function addtask() {
    let a = (prompt('what is your task? --> '));
    const task = {
        name: a,
        done: 0,
    };
    const taskSt = JSON.stringify(task);
    fs.writeFileSync('./tasks.json', taskSt);
}
addtask()