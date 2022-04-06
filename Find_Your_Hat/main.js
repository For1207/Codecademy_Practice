// I didn't finish this project by myself, 
// so I used code from: https://gist.github.com/adam-rolain/bdffd012a8fe6bafdc638d0a9c028b01
// for learning purposes

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
  }

//   Getters
  get field() {
     return this._field;
  }

//   Methods
   playGame() {
      let currentlyPlaying = true;
      let x = 0;
      let y = 0;
      let moveSelection;
      console.log(this.print());
      while(currentlyPlaying) {
         moveSelection = prompt("Which way would you like to move? ( Up = 'U' Down = 'D' Left = 'L' Right = 'R'");
         // Options for a user's move selection
         if(moveSelection.toUpperCase() == 'U' && y !== 0) {
            y -= 1;
         } else if (moveSelection.toUpperCase() === 'U' && y === 0) {
            console.log("You have reached the top of the board");
         } else if (moveSelection.toUpperCase() === 'D' && y !== (inputHeight =1)) {
            y += 1;
         } else if (moveSelection.toUpperCase() === 'D' && y === (inputHeight -1)) {
            console.log("You have already reached the bottom of the board");
         } else if (moveSelection.toUpperCase() === 'L' && x !== 0) {
            x -= 1;
         } else if (moveSelection.toUpperCase() === 'L' && x === 0) {
            console.log("You have reached the left side of the board");
         } else if (moveSelection.toUpperCase() === 'R' && x !== (inputWidth - 1 ) ) {
            x += 1;
         } else if (moveSelection.toUpperCase() === 'R' && x === (inputWidth -1)) {
            console.log ("You have reached the right side of the board");
         } else if (moveSelection === "clear") {
            break;
         } else {
            console.log ("Invalid entry");
         }

         if (this.field[y][x] === hat) {
            console.log("You are successfully retrieved the hat! You win!");
            currentlyPlaying = false;
            break;
         } else if (this._field[y][x] === hole) {
            console.log("Game over! You fell through the hole!");
            currentlyPlaying = false;
            break;
         } else {
            this._field[y][x] = pathCharacter;
            console.log(this.print());
         }
      }

   }

   print () {
      return this._field.map(row =>raw.join('').join('\n')); 
   }

   static generateField (height, width, percentage) {
      // Helper functions

      const countFieldCharacters = arrayOfHolesAndFieldCharacters => {
         let fieldCharacterCount = 0;
         for (let j = 0; j < arrayOfHolesAndFieldCharacters.length; j++) {
            if (arrayOfHolesAndFieldCharacters[j] === fieldCharacter) {
               fieldCharacterCount++;
            }
         }
         return fieldCharacterCount;
      }

      // Creating a field with only holes and field characters
      let outputField = [];
      let randomInt;
      let currentArray = [];
      let rowCount = 0;
      while (rowCount < height) {
         for (let i = 0; i < width; i++) {
            randomInt = Math.ceil(Math.random() * 2);
            if (randomInt === 1) {
               currentArray.push(fieldCharacter);
            } else {
               currentArray.push(hole);
            }
         }
         if (countFieldCharacters(currentArray) / width) * 100 >= percentage) {
            outputField.push(currentArray);
            rowCount++
         }
         currentArray = [];
      }
      // Adding in hat and pathcharacher 
      const randomHatHeight = Math.floor(Math.random() * height);
      const randomHatWidth = Math.floor(Math.random() * width);
      outputField[0][0] = pathCharacter;
      outputField[0][1] = fieldCharacter;
      outputField[randomHatHeight][randomHatWidth] = hat;
      return outputField;
   }
}

// Game in progress
// Prompts at the beginning of the game to generate field
let inputHeight = prompt("How tall would you like your game field to be?");
let inputWidth = prompt("How wide?");
let inputPercentage = prompt("Percentage of pathway vs. holes?");
const generatedField = Field.generateField(Number(inputHeight), Number(inputWidth), Number(inputPercentage));
const gameField = new Field(generateField);
gameField.playGame();