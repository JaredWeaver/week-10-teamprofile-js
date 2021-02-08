
const engineerHTML = (role, {name, id, email, github}) => {
    return `
    <div class="col-md-3 mx-auto card employeeCard border bg-custom">
    <div class="card-header">
        <h3>Anju</h3>
        <h5>Engineer <i class="fas fa-laptop-code"></i></h5>
    </div>
    <p class="card-text">Employee ID: 1</p>
    <p class="card-text"><a href="mailto:">Anju@gmail.com</a></p>
    <p class="card-text"><a href="#">Github</a></p>
</div>
`
}

module.exports = engineerHTML;