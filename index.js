const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerHTML = require('./src/managerHTML');
const engineerHTML = require('./src/engineerHTML');
const internHTML = require('./src/internHTML');
const style = require('./src/style');


const teamMembersArr=[];
let teamName = "";


const startPrompt = () => { inquirer

  .prompt([
    {
      type: 'input',
      message: 'Welcome. To begin building your team, what is your team\'s name?',
      name: 'teamname'
    }
  ])
  .then((data) => {
    console.log(data);
    teamName = data.teamname;
    addManager()
  })
}

const addManager = () => { inquirer

    .prompt([
        {
            type: 'input',
            message: 'What is the manager\'s name?',
            name:'name'
        },
        {
            type: 'input',
            message: 'What is the manager\'s employee ID?',
            name:'id'
        },
        {
            type: 'input',
            message: 'What is the manager\'s email address?',
            name:'email'
        },
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name:'officeNumber'
        },

    ]).then(function({name, id, email, officeNumber}) {
       let newManager;
       newManager = new Manager(name, id, email, officeNumber);
       teamMembersArr.push(newManager);
       console.log(newManager)
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
    console.log(choices.addOrEnd)
    const addOrEnd = choices.addOrEnd;
    if(addOrEnd.includes('intern')){
      addIntern()
    }
    if(addOrEnd.includes('engineer')){
      addEngineer()
    }
    if(addOrEnd.includes('finished')){
     
      const finishHTML = renderHTML();
      console.log(finishHTML)
      fs.writeFileSync('./dist/new.html', finishHTML);
    };
  });
}

const addEngineer = () => { inquirer

  .prompt([
      {
          type: 'input',
          message: 'What is the engineer\'s name?',
          name:'name'
      },
      {
          type: 'input',
          message: 'What is the engineer\'s employee ID?',
          name:'id'
      },
      {
          type: 'input',
          message: 'What is the engineer\'s email address?',
          name:'email'
      },
      {
          type: 'input',
          message: 'What is the engineers\'s Github username?',
          name:'github'
      },

  ]).then(function({name, id, email, github}) {
    //  console.log({name, id, email, github});
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
          name:'name'
      },
      {
          type: 'input',
          message: 'What is the intern\'s employee ID?',
          name:'id'
      },
      {
          type: 'input',
          message: 'What is the intern\'s email address?',
          name:'email'
      },
      {
          type: 'input',
          message: 'What school does the intern attend?',
          name:'school'
      },

  ]).then(function({name, id, email, school}) {
     console.log({name, id, email, school});
     let newIntern;
       newIntern = new Intern(name, id, email, school);
       teamMembersArr.push(newIntern);
       console.log(teamMembersArr)
     addEmployee();

  });

}

function renderHTML(){ 
  return `
    
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profiles</title>
  </head>

  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-custom">
        <div class="container-fluid">
          <h1 class="mx-auto display-4">${teamName} Team Profiles</h1>
        </div>
      </nav>
    </header>
    <div class="container-fluid mx-auto">
    
        <div class="row employeeRow"> 
        ${addEmployeeCard()} 
        </div>
    </div>
    <script src="index.js"></script>
    </body>
</html>
`


}
 

function addEmployeeCard() {
  console.log('in addEmployeeCard()',teamMembersArr);
  console.log(teamMembersArr.Manager)
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