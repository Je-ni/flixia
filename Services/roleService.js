//Defines the properties of the roles
var repo = require('../Repositories/roleRepo');
var baseService = require('../Services/baseService'); //contains the content of module.exports
var joiSchema = require('../JoiSchema/roleSchema');

function roleService(joiSchema){
    //must be added for population purposes
    this.structure = '-__v';
    this.populateA = {path: 'celebrities', select: 'name'};
    this.populateB = '';
    //needed to define the joiSchema
    this.joiSchema = joiSchema;
}
roleService.prototype = baseService(repo);

module.exports = new roleService(joiSchema);