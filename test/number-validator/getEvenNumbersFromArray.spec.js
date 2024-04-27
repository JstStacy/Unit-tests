import { NumbersValidator } from '../../app/numbers-validator.js';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';

describe('getEvenNumbersFromArray', () => {
    let validator;
    beforeEach(() => {
    validator = new NumbersValidator();
  });

afterEach(() => {
    validator = null;
});

it('should return an array of even numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.deep.equal([2, 6, 22]);
});

it('should throw an error if array is not full of numbers', () => {
    const arrayOfValues = [5, '2', 11, 22];
    expect(() => {
        validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[5,2,11,22] is not an array of "Numbers"');
});
});