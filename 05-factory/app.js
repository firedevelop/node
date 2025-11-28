const { getAge, getUUID } = require('./plugins');
const { buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1985-10-21' };

const john = makePerson(obj);

console.log(john);