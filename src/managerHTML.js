const managerHTML = (role) => {
    return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
    <div class="card-header">
        <h3>${role.name}</h3>
        <h5>Manager<i class="fas fa-clipboard"></i></h5>
    </div>
    <p class="card-text">Employee ID: ${role.id}</p>
    <p class="card-text"><a href="mailto:">${role.email}</a></p>
    <p class="card-text">Office Number: ${role.officeNumber}</p>
</div>
`
}

module.exports = managerHTML;