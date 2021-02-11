const inquirer = require('inquirer');
const fs = require('fs');
const validate = require('./src/validate');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerHTML = require('./src/managerHTML');
const engineerHTML = require('./src/engineerHTML');
const internHTML = require('./src/internHTML');
const renderHTML = require('./src/renderHTML');

const teamMembersArr=[];
let teamName = "";



const startPrompt = () => { inquirer

  .prompt([
    {
      type: 'input',
      message: 'Welcome. To begin building your team, what is your team\'s name?',
      name: 'teamname',
      validate: validate.notEmpty
    }
  ])
  .then((data) => {
    teamName = data.teamname;
    addManager()
  })
}

const addManager = () => { inquirer

    .prompt([
        {
            type: 'input',
            message: 'What is the manager\'s name?',
            name:'name',
            validate: validate.notEmpty
        },
        {
            type: 'input',
            message: 'What is the manager\'s employee ID?',
            name:'id',
            validate: validate.numbersOnly
        },
        {
            type: 'input',
            message: 'What is the manager\'s email address?',
            name:'email',
            validate: validate.email
        },
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name:'officeNumber',
            validate: validate.numbersOnly
        },

    ]).then(function({name, id, email, officeNumber}) {
       let newManager;
       newManager = new Manager(name, id, email, officeNumber);
       teamMembersArr.push(newManager);
       addEmployee();


    });

}

const addEmployee = () => { inquirer

  .prompt([
  {
    type: 'list',
    message: 'Select from the options below to add members to your team. Want to add more members?',
    name:'addOrEnd',
    choices: ['Yes, I would like to add an engineer', 
              'Yes, I would like to add an intern', 
              'Nope, I am finished.']
  }

  ]).then(function(choices){
    const addOrEnd = choices.addOrEnd;
    if(addOrEnd.includes('intern')){
      addIntern()
    }
    if(addOrEnd.includes('engineer')){
      addEngineer()
    }
    if(addOrEnd.includes('finished')){
     
      const finishHTML = renderHTML(teamName, addEmployeeCard());
      fs.writeFileSync('./dist/new.html', finishHTML);
    };
  });
}

const addEngineer = () => { inquirer

  .prompt([
      {
          type: 'input',
          message: 'What is the engineer\'s name?',
          name:'name',
          validate: validate.notEmpty
      },
      {
          type: 'input',
          message: 'What is the engineer\'s employee ID?',
          name:'id',
          validate: validate.numbersOnly
      },
      {
          type: 'input',
          message: 'What is the engineer\'s email address?',
          name:'email',
          validate: validate.email
      },
      {
          type: 'input',
          message: 'What is the engineers\'s Github username?',
          name:'github',
          validate: validate.notEmpty
      },

  ]).then(function({name, id, email, github}) {
     let newEngineer;
       newEngineer = new Engineer(name, id, email, github);
       teamMembersArr.push(newEngineer);
     
     addEmployee();
  });

}

const addIntern = () => { inquirer

  .prompt([
      {
          type: 'input',
          message: 'What is the intern\'s name?',
          name:'name',
          validate: validate.notEmpty
      },
      {
          type: 'input',
          message: 'What is the intern\'s employee ID?',
          name:'id',
          validate: validate.numbersOnly
      },
      {
          type: 'input',
          message: 'What is the intern\'s email address?',
          name:'email',
          validate: validate.email
      },
      {
          type: 'input',
          message: 'What school does the intern attend?',
          name:'school',
          validate: validate.notEmpty
      },

  ]).then(function({name, id, email, school}) {
     let newIntern;
       newIntern = new Intern(name, id, email, school);
       teamMembersArr.push(newIntern);
     addEmployee();

  });

}
 
const addEmployeeCard = () => {
 
  let cards = "";
 teamMembersArr.forEach(member => {
       
    if(member.getRole() === 'Manager') {
       cards += managerHTML(member)
    } 
    if(member.getRole() === 'Engineer') {
      cards += engineerHTML(member)
    } 
    if(member.getRole() === 'Intern') {
      cards += internHTML(member)
    } 
 })
return cards;
}

function init(){
    startPrompt();
}
init()