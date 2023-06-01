function convertRomanToArabic() {
  var romanInput = document.getElementById('roman-input').value;
  var arabicResult = romanToArabic(romanInput);
  document.getElementById('result-text').textContent = arabicResult !== null ? arabicResult : 'Número romano inválido.';
}

function convertArabicToRoman() {
  var arabicInput = document.getElementById('arabic-input').value;
  var romanResult = arabicToRoman(arabicInput);
  document.getElementById('result-text').textContent = romanResult !== null ? romanResult : 'Número arábico inválido.';
}

function romanToArabic(romanNumber) {
  var romanToArabicMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  var result = 0;
  var previousValue = 0;
  
  for (var i = romanNumber.length - 1; i >= 0; i--) {
      var currentValue = romanToArabicMap[romanNumber[i]];
      
      if (currentValue === undefined) {
          return null;
      }
      
      if (currentValue >= previousValue) {
          result += currentValue;
      } else {
          result -= currentValue;
      }
      
      previousValue = currentValue;
  }
  
  return result;
}

function arabicToRoman(arabicNumber) {
  var arabicToRomanMap = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
  };
  
  var result = '';
  
  var arabicValues = Object.keys(arabicToRomanMap).sort(function(a, b) {
      return b - a;
  });
  
  while (arabicNumber > 0) {
      for (var i = 0; i < arabicValues.length; i++) {
          if (arabicNumber >= arabicValues[i]) {
              result += arabicToRomanMap[arabicValues[i]];
              arabicNumber -= arabicValues[i];
              break;
          }
      }
  }
  
  return result;
}
