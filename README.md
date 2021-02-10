** TESTS

Describe: convertToRoman(num)
Test: It takes an integer and returns the corresponding roman numeral
Expect: convertToRoman(1).toEqual(I)
Expect: convertToRoman(11).toEqual(XI)

Describe: Can not be more than 3,999
Test: If number is 4000 we should get no return, if number is between 1-3999 we should get the roman numeral.
Expect: convertToRoman < 4000