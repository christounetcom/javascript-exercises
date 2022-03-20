const repeatString = function(str, num) {
    let returnStr = "";
    if (num >= 0) {
    for (i = 0; i < num; i++) {
        returnStr += str;        }
    } else {
        return "ERROR";
    }
    
    return returnStr;
};
//repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
