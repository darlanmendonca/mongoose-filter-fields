'use strict';

var _mocha = require('mocha');

var _chai = require('chai');

var filter = require(process.env.PWD + '/' + process.env.npm_package_main);

(0, _mocha.describe)('filter', test);

function test() {
  (0, _mocha.it)('as a function', function () {
    console.log(filter('-__v -password')({ fields: 'id,email', page: 2 }));
    (0, _chai.expect)(filter).to.be.a.function;
  });
}
