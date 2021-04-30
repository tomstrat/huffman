//Huffman Encoder & Decoder
//Takes a text string and encodes it for compression
//Takes an encoded string and decodes it back to text

class Huffman {

    constructor(text){
      this.text = text;
      this.map = [];
    }

    initialise(){
      this.createSortableChars();
      this.sortArray(this.map);
      this.createMap();
    }

    sortArray(arr){
      return arr.sort((a, b) => {
        return b[1] - a[1];
      });
    }

    createSortableChars(){
      const stringObject = {};
      
      const stringArr = this.text.split("");
    
      //enumerates the string into an object with its appearance quantity
      stringArr.forEach(char => {
        if(stringObject[char] == undefined){
          stringObject[char] = 1;
        } else {
          stringObject[char] += 1;
        }
      });
    
      //Puts the object into an array
      for (let char in stringObject){
        this.map.push([char, stringObject[char]]);
      }
    }

    createMap(){
      //initialise array lengths here as they will change
      const m1 = this.map.length - 1;
      const m2 = this.map.length - 2;

      if(this.map[m2] === undefined){
        return;
      }
      const lastTwoAdded = this.map[m1][1] + this.map[m2][1];
      //pushes an array with the last two entries in an array with the sum
      this.map.push([[this.map.pop(), this.map.pop()],lastTwoAdded]);

      this.map = this.sortArray(this.map);
      this.createMap(this.map);
      return
    }
}


const testString = "This is a sentence and it has lots of wordz and letters lol hi";


const classMap = new Huffman(testString);
classMap.initialise();

console.dir(classMap.map, {depth:null});
