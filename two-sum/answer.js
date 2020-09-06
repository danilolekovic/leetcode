/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var output = [];
    
    for (var x in nums) {
        for (var y in nums) {
            // cannot use same element twice
            if (x != y) {
                if (nums[x] + nums[y] == target) {
                    output.push(x);
                    output.push(y);
                    
                    return output;
                }
            }
        }
    }
    
    return output;
};
