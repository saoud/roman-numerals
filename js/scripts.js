
let romanDictionary = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];


function convertToRoman(num) {
  if ((num === 0) || (num >= 4000)) {
    return 'This number does not exist in roman numerals';
  }
  for (var i = 0; i < romanDictionary.length; i++) {
      if (num >= romanDictionary[i][0]) {
          return romanDictionary[i][1];
      } 
    }
  }

console.log(convertToRoman(3999))