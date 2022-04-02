const calcFunction = require('./calc');

describe('calcFunction', () => {

    it('adding two number', () => {
         expect(addNumber(20,10).toBe(30));
        });

it('subtract two numbers', ()=> {
    expect(subtractNumber(20,10).toBe(10));
    });

});