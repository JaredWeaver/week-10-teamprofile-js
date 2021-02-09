const Employee = require('../lib/Employee')

describe('Employee Class', () => {

    it('Can instantiate employee instance', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    })

    describe('Constructor', () => {

        it('should set all employee values', () => {
            const name = "Jared";
            const id = 2;
            const email = 'jared.weaver@test.com'
            const employee = new Employee(name, id, email);
            expect(employee.name).toBe(name);
            expect(employee.id).toBe(id);
            expect(employee.email).toBe(email);
        }); 

    });

    describe('getName()', () => {
        it('should return the name', () => {
            const employee = new Employee('Jared');
            expect(employee.getName()).toBe('Jared');
        });
    });

    describe('getID()', () => {
        it('should return the ID', () => {
            const employee = new Employee('Jared', '5');
            expect(employee.getID()).toBe('5');
        });
    });

    describe('getEmail()', () => {
        it('should return the email', () => {
            const employee = new Employee('Jared', '5', 'jared@test.com');
            expect(employee.getEmail()).toBe('jared@test.com');
        });
    });

    describe('getrole()', () => {
        it('should return "Employee"', () => {
            const testRole = "Employee";
            const employee = new Employee('Jared', '5', 'jared@test.com');
            expect(employee.getRole()).toBe(testRole);
        })
    });







});