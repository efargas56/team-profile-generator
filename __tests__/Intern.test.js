const Intern = require('../lib/Intern');

test('get Interns school', () => {
    const intern = new Intern('billy', 20, 'billy99@yahoo.com', 'UCF');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));

})
test ('get employees role', () => {
    const intern = new Intern('billy', 20, 'billy99@yahoo.com', 'UCF');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})