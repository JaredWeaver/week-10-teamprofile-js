const renderCSS = () => {
 return `
body {
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    margin: 0;
    width: 100%;
    background-color: rgb(104, 84, 112);
    color: white;
  }

  .navbar {
      background-color: rgb(44, 28, 42) ;
  }

  .employeeRow {
      padding-right: 50px;
      padding-left: 50px;
  }

  .card-header {
      background-color:rgb(52, 99, 76);
      border-radius: 20%;
  }

  .employeeCard {
      margin-top: 40px;
      margin-right: 10px;
      border-radius: 5%;
      background-color: rgb(15, 39, 28);
      height: 300px;
  }
`
}

module.exports = renderCSS;