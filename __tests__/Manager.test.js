const Manager = require('../lib/Manager');

test('get Managers Office Number', () => {
    const manager = new Manager('Herald', 35, 'herald.wss21@yahoo.com', 331);

    expect(manager.officeNumber).toEqual(expect.any(Number));

})
test ('get employees role', () => {
    const manager = new Manager('Herald', 35, 'herald.wss21@yahoo.com', 331);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})