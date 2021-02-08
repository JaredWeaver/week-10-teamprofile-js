const managerHTML = (role, {name, id, email, officeNumber}) => {
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

module.exports = managerHTML;