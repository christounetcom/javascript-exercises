const reverseString = function(str) {
    let reversedString ='';

    for (let i = str.length; i >= 0; i--) {
        reversedString += str[i];
    };
    return reversedString;
};

reverseString('hello there');
// Do not edit below this line
module.exports = reverseString;
