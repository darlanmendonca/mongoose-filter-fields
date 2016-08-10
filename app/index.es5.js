'use strict';

module.exports = FilterFields;

function FilterFields(privateFields) {
  return function (reqQuery) {
    var arrPrivateFields = privateFields.split(' ');
    var publicFields = function publicFields(value) {
      return arrPrivateFields.indexOf('-' + value) === -1;
    };
    var fields = reqQuery.fields ? reqQuery.fields.replace(/,/g, ' ').split(' ') : undefined;

    if (fields) {
      fields = fields.filter(publicFields);
    }
    return fields ? fields.join(' ') : privateFields;
  };
}
