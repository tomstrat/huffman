//Huffman Encoder & Decoder
const testString = "This is a sentence and it has lots of wordz and letters lol hi";

const makeLetterObject = string => {

  let stringObject = {};
  const stringArr = string.split("");
  stringArr.forEach(char => {
    if(stringObject[char] = undefined){
      stringObject[char] = 1;
    } else {
      stringObject[char] += 1;
    }
  });
  console.log(stringObject);
};

makeLetterObject(testString);