/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    for (var i = 0; i < num; i++) {
        if (4**i > num) {
            break;
        } else if (4**i == num) {
            return true;
        }
    }
    
    return false;
};
