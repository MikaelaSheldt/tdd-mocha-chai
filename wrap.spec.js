const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns the text if the text is shorter than the maxLength', () => {
    expect(wrap('hello world', 20)).to.equal('hello world')
  });

  it('Returns the text if the text length is the same as the maxLength', () => {
    expect(wrap('hello world', 11)).to.equal('hello world')
  });

  it('splits a continuous string on the maxLength', () => {
    expect(wrap('aaaaaaaaaa', 2)).to.equal('aa\naa\naa\naa\naa')
  });

  it('maintains original spacing and individual word length', () => {
    expect(wrap('hello my name is mikaela', 7)).to.equal('hello \nmy name\n')
  });
});
