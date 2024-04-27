import { NumbersValidator } from '../../app/numbers-validator.js';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when input is integer', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when if inputs in array are  not numbers', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});