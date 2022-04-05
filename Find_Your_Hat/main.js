const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
   constructor(obj) {
      this._field = obj;
   }

   print() {
      console.log(this._field.join(""));
   }
}