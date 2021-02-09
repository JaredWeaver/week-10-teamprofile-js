

  const internHTML = (role, {name, id, email, school}) => {
    return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
    <div class="card-header">
        <h3>${teamMembersArr.intern.name}</h3>
        <h5>Intern <i class="fas fa-child"></i></h5>
    </div>
    <p class="card-text">Employee ID: ${teamMembersArr.intern.id} </p>
    <p class="card-text"><a href="mailto:">${teamMembersArr.intern.email}</a></p>
    <p class="card-text">School:${teamMembersArr.intern.school}</p>
  </div>
`
}

module.exports = internHTML;