/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for (var i = 0; i < n; i++) {
        if (2**i > n) {
            break;
        } else if (2**i == n) {
            return true;
        }
    }
    
    return false;
};
