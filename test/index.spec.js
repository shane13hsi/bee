import {assert} from 'chai';
import { add } from '../src';

describe('add', () => {
  it('should add 2 and 2', () => {
    assert(add(2, 2) === 4);
});
});
