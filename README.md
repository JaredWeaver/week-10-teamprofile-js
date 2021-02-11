# Team Profile Generator
This is an application that utilizes inquirer to gather a user's responses to prompts in the command line, and dynamically renders an HTML file displaying those responses. 


![demo-gif](./team-gen-demo.gif)


[Demo Video Link](https://youtu.be/jz4fjAeSv0U)



## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

To install the proper dependencies, please use the following command:

```
npm i inquirer
npm i jest
```

## Tests

```
npm run test
```

## License

This application is protected by the [MIT](https://opensource.org/licenses/MIT) license. 

## Questions

For any questions relating to this application, please reach out to me at the following:

Email: jared.weaver2@gmail.com

Github: [JaredWeaver](github.com/JaredWeaver)