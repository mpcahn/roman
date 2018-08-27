var romanNum = {
  'weird': {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  },
  'normal': {
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
  var i = 0
  console.log(str.length)
  
  while (i < str.length){
    for (key in romanNum['weird']) {
      sym = str.charAt(i) + str.charAt(i++) 
      if (key === sym){
        console.log(sym)
        count += romanNum['weird'][key]
        i += 2
      } 
    }
    for (key in romanNum['normal']){
      sym = str.charAt(i)
      if (key = sym){
        console.log(sym)
        count += romanNum['normal'][key]
        i++
      }
    }
  }

  return count
}

console.log(romanToDecimal('VII'))
console.log(romanToDecimal('XXXXII'))
console.log(romanToDecimal('CIV'))
console.log(romanToDecimal('VII'))
console.log(romanToDecimal('VII'))