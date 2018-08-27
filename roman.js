var romanNum = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function romanToDecimal(str) {
  var count = 0
  var i = 0

  for (var i = 0; i < str.length; i++) {
    var sym = romanNum[str.charAt(i)]
    var fut = romanNum[str.charAt(i+1)]

    if (fut > sym){
      count -= sym 
    } else {
      count += sym
    }
  }

  return count
}

console.log(romanToDecimal('VII'), ': 7')
console.log(romanToDecimal('XLII'), ': 42')
console.log(romanToDecimal('CIV'), ': 104')
console.log(romanToDecimal('CIX'), ': 109')
console.log(romanToDecimal('MXC'), ': 1090')