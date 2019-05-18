//JavaScript Algorithms and Data Structures Projects: Caesars Cipher

/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */

function rot13(str) { // LBH QVQ VG!
  var str1 = str.toUpperCase(); //SERR PBQR PNZC
  var arr = str1.split('');
  var sentence = [];
  var decrypted = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
      decrypted.push('N');
    }
    if (arr[i] === 'B') {
      decrypted.push('O');
    }
    if (arr[i] === 'C') {
      decrypted.push('P');
    }
    if (arr[i] === 'D') {
      decrypted.push('Q');
    }
    if (arr[i] === 'E') {
      decrypted.push('R');
    }
    if (arr[i] === 'F') {
      decrypted.push('S');
    }
    if (arr[i] === 'G') {
      decrypted.push('T');
    }
    if (arr[i] === 'H') {
      decrypted.push('U');
    }
    if (arr[i] === 'I') {
      decrypted.push('V');
    }
    if (arr[i] === 'J') {
      decrypted.push('W');
    }
    if (arr[i] === 'K') {
      decrypted.push('X');
    }
    if (arr[i] === 'L') {
      decrypted.push('Y');
    }
    if (arr[i] === 'M') {
      decrypted.push('Z');
    }
    if (arr[i] === 'N') {
      decrypted.push('A');
    }
    if (arr[i] === 'O') {
      decrypted.push('B');
    }
    if (arr[i] === 'P') {
      decrypted.push('C');
    }
    if (arr[i] === 'Q') {
      decrypted.push('D');
    }
    if (arr[i] === 'R') {
      decrypted.push('E');
    }
    if (arr[i] === 'S') {
      decrypted.push('F');
    }
    if (arr[i] === 'T') {
      decrypted.push('G');
    }
    if (arr[i] === 'U') {
      decrypted.push('H');
    }
    if (arr[i] === 'V') {
      decrypted.push('I');
    }
    if (arr[i] === 'W') {
      decrypted.push('J');
    }
    if (arr[i] === 'X') {
      decrypted.push('K');
    }
    if (arr[i] === 'Y') {
      decrypted.push('L');
    }
    if (arr[i] === 'Z') {
      decrypted.push('M');
    }
    if (arr[i].charCodeAt() > 31 && arr[i].charCodeAt() < 65) {
      decrypted.push(arr[i]);
    }

    sentence = decrypted.join();
  }
  var strStr = sentence.replace(/,/g, "");
  console.log(strStr);
  return strStr;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");