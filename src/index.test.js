// Another convention for test files is .spec, i.e: index.spec.js

import expect from 'expect';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});