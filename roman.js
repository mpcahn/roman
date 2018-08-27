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

  while (i < str.length) {
    let sym = str.charAt(i)
    let deuc = sym + str.charAt(i + 1)

    for (key in romanNum['weird']) {
      if (key === deuc) {
        count += romanNum['weird'][key]
        i += 2
        break;
      }
    }

    for (key in romanNum['normal']) {
      if (key === sym) {
        count += romanNum['normal'][key]
        i++
        break;
      }
    }
  }

  return count
}

console.log(romanToDecimal('VII'))
console.log(romanToDecimal('XXXXII'))
console.log(romanToDecimal('CIV'))
console.log(romanToDecimal('CIX'))
console.log(romanToDecimal('MXC'))