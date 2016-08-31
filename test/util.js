import 'babel-polyfill';
import assert from 'assert';
import {util} from '../src/util.js';

describe('Utils', () => {
  describe('#removeDot()', () => {
    it('should return \'Just a little\' withou dot', function() {
      assert.equal('testando', util.removeDot('testando.'));
    });
	});
});