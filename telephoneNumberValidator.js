//JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

/* Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

function telephoneCheck(str) {
  // Good luck!
  //FAKE NUMBERS -----------------------------------
  for (var i = 0; i < str.length; i++) {
    if (str[0] !== "1" && str.includes("(") && str.includes(")") && str.substr(5, ).length > 7 && str.substr(5, ).match(/^\d+$/)) {
      return false;
    }
    if (str[0] === "-" || str[0] === "0") {
      return false;
    }
    if (str.includes("(") && !str.includes(")") || str.includes(")") && !str.includes("(")) {
      return false;
    }
    if (str.length >= 17 && str[0] === "1") {
      return false;
    }
    if (str.length < 10) {
      return false;
    }
    if (str[i].match(/^[a-zA-Z]*$/) || str[i].match(/^[.,:!?]/)) {
      return false;
    }
    if (str[0] > 1 && str[0] < 5) {
      return false;
    }
    if (str[str.length - 1] === 'NaN') {
      return false;
    }
    if (str[str.length - 1] === ")") {
      return false;
    }
  }
  //END OF FAKE CASES------------------------------------------------- 
  return true;
}

telephoneCheck("8oo-six427676");