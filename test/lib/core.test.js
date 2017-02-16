import printMessage from 'core';

describe('test the library core file', () => {
    it('should return a string from printMessage', () => {
        expect(printMessage()).toEqual("Hello World!");
    })
});