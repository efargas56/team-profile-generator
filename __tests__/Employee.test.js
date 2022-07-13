const Employee = require('../lib/Employee');

test('Created an employee class', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
test('get employees name', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getName()).toEqual(expect.any(String));

})
test('get employee ID', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getId()).toEqual(expect.any(Number));
})
test('get employee email', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

})
test ('get employees role', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getRole()).toEqual(expect.stringContaining('employee'))
})
