const helloWorld = require('./index');

describe('test', () => {
  it('should be true', () => {
    helloWorld();
    expect(true).toBeTruthy();
  });
});
