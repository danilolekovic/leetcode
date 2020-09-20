/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output = [];
    
    for (var x = 0; x < nums.length; x++) {
        var buffer = 1;
        
        for (var y = 0; y < nums.length; y++) {
            if (y != x) {
                buffer *= nums[y];
            }
        }
        
        output.push(buffer);
    }
    
    return output;
};
