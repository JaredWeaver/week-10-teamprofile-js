
const engineerHTML = (role) => {
    return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
    <div class="card-header">
        <h3>${role.name}</h3>
        <h5>Engineer <i class="fas fa-laptop-code"></i></h5>
    </div>
    <p class="card-text">Employee ID: ${role.id}</p>
    <p class="card-text"><a href="mailto:">${role.email}</a></p>
    <p class="card-text"><a href="#">${role.github}</a></p>
</div>
`
}

module.exports = engineerHTML;