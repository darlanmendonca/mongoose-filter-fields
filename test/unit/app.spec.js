import {describe, it} from 'mocha';
import {expect} from 'chai';
const filter = require(`${process.env.PWD}/${process.env.npm_package_main}`);

describe('filter', test);

function test() {
  it('as a function', () => {
    console.log(filter('-__v -password')({fields: 'id,email', page: 2}));
    expect(filter).to.be.a.function;
  });
}
