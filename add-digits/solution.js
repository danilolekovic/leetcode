/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var numsAsChars = num.toString().split("");
    var output = 1000;
    
    while (output > 9) {
        output = 0;
        
        for (var num in numsAsChars) {
            output += parseInt(numsAsChars[num]);
        }
        
        numsAsChars = output.toString().split("");
    }
    
    return output;
};
