//Huffman Encoder & Decoder
const testString = "This is a sentence and it has lots of wordz and letters lol hi";

const createSortableChars = string => {

  const stringObject = {};
  const sortable = [];
  
  const stringArr = string.split("");
  stringArr.forEach(char => {
    if(stringObject[char] == undefined){
      stringObject[char] = 1;
    } else {
      stringObject[char] += 1;
    }
  });

  for (let char in stringObject){
    sortable.push([char, stringObject[char]]);
  }
  return sortable;
};

const sortArray = arr => {
  return arr.sort((a, b) => {
    return b[1] - a[1];
  });
}

const createMap = array => {
  const m1 = array.length - 1;
  const m2 = array.length - 2;

  if(array[m2] === undefined){
    return array;
  }
  console.log(array[m1][1]);
  //pushes an array with the last two entries in an array with the sum
  array.push([[array.pop(), array.pop()],array[m1][1] + array[m2][1]]);
  console.log(array);
  array = sortArray(array);
  createMap(array);
}

const mainArray = createSortableChars(testString);
const sorted = sortArray(mainArray);
const map = createMap(sorted);
console.log(map);
