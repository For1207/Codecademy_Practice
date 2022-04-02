class Cipher {
   constructor (num) {
      this._downNum = num;
      this._encryptedPhrase = ""
   }

   get downNum() {
      return this._downNum;
   }

   encrypt(aPhrase) {
      let numArray = [];
      const capitalized = aPhrase.toUpperCase();
      const numArrayLength = capitalized.length;
      let ciphered = [];
      let curChar ='';
      let curNum = 999;
      for(let i = 0; i < numArrayLength; i++) {
         curNum = capitalized[i].charCodeAt();
         if(curNum >= 65 && curNum <= 90){
            curNum += this._downNum;
            if(curNum > 90) {
               curNum -= 26;
            }
         }
         numArray.push(curNum);
         // console.log(numArray);
         curChar = String.fromCharCode(numArray[i]);
         ciphered += curChar.toUpperCase();
      }
      // console.log(ciphered);
      return ciphered;
   }

   decrypt(aPhrase) {
      let numArray = [];
      const lowerCase = aPhrase.toLowerCase();
      const numArrayLength = lowerCase.length;
      let decrypt = [];
      let curChar = '';
      let curNum = 999;
      for(let i = 0; i < numArrayLength; i++) {
         curNum = lowerCase[i].charCodeAt();
         if(curNum >= 97 && curNum <= 122) {
            curNum -= this._downNum;
            if(curNum < 97) {
               curNum += 26;
            } 
         }
         numArray.push(curNum);
         curChar = String.fromCharCode(numArray[i]);
         decrypt += curChar.toLowerCase();
      }
      // console.log(decrypt);
      return decrypt;
   }
}

const aCipher = new Cipher(2);
aCipher.encrypt("I love to code!");
aCipher.decrypt("K <3 OA RWRRA");

