

  const internHTML = (role) => {
    return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
    <div class="card-header">
        <h3>${role.name}</h3>
        <h5>Intern <i class="fas fa-child"></i></h5>
    </div>
    <p class="card-text">Employee ID: ${role.id} </p>
    <p class="card-text"><a href="mailto:">${role.email}</a></p>
    <p class="card-text">School:${role.school}</p>
  </div>
`
}

module.exports = internHTML;