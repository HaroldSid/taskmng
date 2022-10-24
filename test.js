const prompt = require('prompt-sync')(
    {
        history: require('prompt-sync-history')() //open history file
    });
const fs = require('fs');
function addtask() {
    let a = (prompt('what is your task? --> '));
    const task = {
        name: a,
        done: 0,
    };
    const taskSt = JSON.stringify(task);
    fs.writeFileSync('./tasks.json', taskSt);
}
//addtask()
// var XMLHttpRequest = require('xhr2');
// var requestURL = '../tasks.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function () {
//     var superHeroes = request.response;
//     console.log(superHeroes['members'][1]['powers'][2]);
// }
const data = fs.readFileSync('./tasks.json',
    { encoding: 'utf8', flag: 'r' });
console.log(JSON.parse(data)['squadName']);