const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

const teamMembersArr=[];

const prompt = () => { inquirer

    .prompt([
        {
            type: 'input',
            message: 'What is the Manager\'\ s name?',
            name:'name'
        },
        {
            type: 'input',
            message: 'What is the Manager\'s employee ID?',
            name:'id'
        },
        {
            type: 'input',
            message: 'What is the Manager\'s email address?',
            name:'email'
        },
        {
            type: 'input',
            message: 'What is the Manager\'s office number?',
            name:'officeNumber'
        },

    ]).then((response, ) => {
        console.log(response);

    });





}

function renderHTML(role){ 
   const html = `
    
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
    <link rel="stylesheet" href="style.css" />
    <title>Team Profiles</title>
  </head>

  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-custom">
        <div class="container-fluid">
          <h1 class="mx-auto display-4">Awesome Company's Team Profiles</h1>
        </div>
      </nav>
    </header>
    <div class="container-fluid mx-auto">
        <div class="row employeeRow">  

        </div>
    </div>
    <script src="index.js"></script>
    </body>
</html>
`


}

function addEmployeeCard(role, object) {
    if(role === 'Manager'){
        return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
        <div class="card-header">
            <h3>Jared</h3>
            <h5>Manager  <i class="fas fa-clipboard"></i></h5>
        </div>
        <p class="card-text">Employee ID: 1</p>
        <p class="card-text"><a href="mailto:">jared.weaver2@gmail.com</a></p>
        <p class="card-text">Office Number: 4</p>
    </div>
    `
    }


}

function init(){
    prompt();
}
init()