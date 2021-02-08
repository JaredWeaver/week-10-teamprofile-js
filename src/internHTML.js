

  const internHTML = (role, {name, id, email, school}) => {
    return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
    <div class="card-header">
        <h3></h3>
        <h5>Intern <i class="fas fa-child"></i></h5>
    </div>
    <p class="card-text">Employee ID: 1</p>
    <p class="card-text"><a href="mailto:">Anju@gmail.com</a></p>
    <p class="card-text">School: ECU </p>
  </div>
`
}

module.exports = internHTML;