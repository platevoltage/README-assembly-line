const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
    .prompt([
        {
            type: 'input',
            message: 'Enter the project title...',
            name: 'title'
        },{
            type: 'input',
            message: 'Enter a description of the project...',
            name: 'description'
        },{
            type: 'input',
            message: 'Enter usage information...',
            name: 'usage'
        },{
            type: 'input',
            message: 'Enter contribution guidelines...',
            name: 'contribution'
        },{
            type: 'input',
            message: 'Enter test instructions...',
            name: 'testInstructions'
        },



    ])
    .then((response) => {

        console.log(response);
        fs.writeFile("data.json", JSON.stringify(response), (err) => err ? console.log(err) : console.log("success!")); 

    });