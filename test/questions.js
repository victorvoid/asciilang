import 'babel-polyfill';
import assert from 'assert';
import {Questions} from '../src/questions.js';
import should from 'should';

describe('#Questions()', () => {
  it('should return array with values', function() {
		let value = Questions('/phrases/common-expressions-pt-eng.txt');
		(value).should.not.be.NaN();
  });
});