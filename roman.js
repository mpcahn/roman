var romanNum = {
  weird: {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  },
  normal: {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
}

function romanToDecimal(str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    sym = str.charAt(i)
    for (key in romanNum) {
      if (key = sym) {
        count += romanNum[key]
      }
    }
  }
}

console.log(romanToDecimal('VII'))
console.log(romanToDecimal('XXXXII'))
console.log(romanToDecimal('CIV'))
console.log(romanToDecimal('VII'))
console.log(romanToDecimal('VII'))