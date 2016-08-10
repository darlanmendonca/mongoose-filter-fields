module.exports = FilterFields;

function FilterFields(privateFields) {
  return function(reqQuery) {
    let arrPrivateFields = privateFields.split(' ');
    let publicFields = function(value) {
      return arrPrivateFields.indexOf(`-${value}`) === -1;
    };
    let fields = reqQuery.fields ?
      reqQuery.fields.replace(/,/g, ' ').split(' ') :
      undefined;

    if (fields) {
      fields = fields.filter(publicFields);
    }
    return fields ? fields.join(' ') : privateFields;
  };
}
