//JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function convertToRoman(num) {
  var arr = Array.from(num.toString());
  var parts = [];
  var multiplier = 1;
  while (num > 0 && num < 4000) {
    var result = num % 10;
    if (result > 0) {
      parts.unshift(result * multiplier);
    }
    num = Math.floor(num / 10);
    multiplier = multiplier * 10;
  }
  if (num > 4000) {
    console.log("Please select a number below 4000");
    return num;
  }
  var romans = [];
  for (var i = 0; i < parts.length; i++) {
    //console.log(typeof parts[i]) //number
    //MILHARES
    if (parts[i] === 1000) {
      romans.push("M");
    }
    if (parts[i] === 2000) {
      romans.push("MM");
    }
    if (parts[i] === 3000) {
      romans.push("MMM");
    }
    //CENTENAS
    if (parts[i] === 100) {
      romans.push("C");
    }
    if (parts[i] === 200) {
      romans.push("CC");
    }
    if (parts[i] === 300) {
      romans.push("CCC");
    }
    if (parts[i] === 400) {
      romans.push("CD");
    }
    if (parts[i] === 500) {
      romans.push("D");
    }
    if (parts[i] === 600) {
      romans.push("DC");
    }
    if (parts[i] === 700) {
      romans.push("DCC");
    }
    if (parts[i] === 800) {
      romans.push("DCCC");
    }
    if (parts[i] === 900) {
      romans.push("CM");
    }
    //DEZENAS
    if (parts[i] === 10) {
      romans.push("X");
    }
    if (parts[i] === 20) {
      romans.push("XX");
    }
    if (parts[i] === 30) {
      romans.push("XXX");
    }
    if (parts[i] === 40) {
      romans.push("XL");
    }
    if (parts[i] === 50) {
      romans.push("L");
    }
    if (parts[i] === 60) {
      romans.push("LX");
    }
    if (parts[i] === 70) {
      romans.push("LXX");
    }
    if (parts[i] === 80) {
      romans.push("LXXX");
    }
    if (parts[i] === 90) {
      romans.push("XC");
    }
    //UNIDADES
    if (parts[i] === 1) {
      romans.push("I");
    }
    if (parts[i] === 2) {
      romans.push("II");
    }
    if (parts[i] === 3) {
      romans.push("III");
    }
    if (parts[i] === 4) {
      romans.push("IV");
    }
    if (parts[i] === 5) {
      romans.push("V");
    }
    if (parts[i] === 6) {
      romans.push("VI");
    }
    if (parts[i] === 7) {
      romans.push("VII");
    }
    if (parts[i] === 8) {
      romans.push("VIII");
    }
    if (parts[i] === 9) {
      romans.push("IX");
    }
  }
  var st = romans.toString();
  var romanNum = st.replace(/,/g, "");
  console.log(romanNum);
  return romanNum;
}

convertToRoman(798);
