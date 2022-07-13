const Engineer = require('../lib/Engineer');

test('get engineers github', () => {
    const engineer = new Engineer('steven', 24, 'steven24@yahoo.com', 'steven24');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));;

})
test ('get employees role', () => {
    const engineer = new Engineer('steven', 24, 'steven24@yahoo.com', 'steven24');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})