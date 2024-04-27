import { NumbersValidator } from '../../app/numbers-validator.js';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when if all inputs in array are numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.equal(true);
  });

  it('should throw an error when if inputs in array are  not numbers', () => {
    expect(() => {
      validator.isAllNumbers('4');
    }).to.throw('[4] is not an array');
  });
});