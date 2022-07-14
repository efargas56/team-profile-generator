const inquirer = require('inquirer');

const Employee = require('./lib/Employee');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern');

const Manager = require('./lib/Manager');

const fs = require("fs");

const generateTeam = require("./src/template.js")

const teamArray = [];

const path = require("path");


function app () {
    
    function teamGenerator () {
        inquirer
        .prompt([{
            type: "list",
            message: "what team member would you like to add to the list?",
            name: "addTeamPrompt",
            choices: ["Manager", "Engineer", "Intern", "No more additions."]
        }]).then(function (userInput) {
            switch(userInput.addTeamPrompt) {
              case "Manager":
                createManager();
                break;
              case "Engineer":
                createEngineer();
                break;
              case "Intern":
                createIntern();
                break;
      
              default:
                htmlPage();
            }
          })
        }
 function createManager() {
        inquirer
        .prompt([
        {
            type: 'text',
            name: 'managersName',
            message: 'what is the team managers name?'
        },

        {
            type: 'text',
            name: 'managersId',
            message: 'what is the team managers ID?'
        },
             
        {
            type: 'text',
            name: 'managersEmail',
            message: 'what is the team managers email?'
        },

        {
            type: 'text',
            name: 'officeNumber',
            message: 'what is the team managers office number?'
        }
    ]).then(answers => {
        const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answers.officeNumber);
        teamArray.push(manager);
         teamGenerator();
    });

    }

 function createEngineer() {
    inquirer
    .prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: 'what is the Engineers ID?'
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "what is the Engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        teamArray.push(engineer);
        teamGenerator();
    })
 }
 function createIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "InternId",
            message: 'what is the interns ID?'
        },
        {
            type: "input",
            name: "InternEmail",
            message: 'what is the interns email?'
        },
        {
            type: "input",
            name: "InternSchool",
            message: "What school does the intern go to?"
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.InternId, answers.InternEmail, answers.InternSchool)
        teamArray.push(intern);
        teamGenerator();
    });
 }
 function htmlPage () {
    console.log("Team created!")

    fs.writeFileSync('./dist/index.html', generateTeam(teamArray), "UTF-8")

}
teamGenerator();

}

app();