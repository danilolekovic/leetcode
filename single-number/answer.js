/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var once = [];
    var twice = [];
    
    for (var i in nums) {
        if (once.includes(nums[i])) {
            twice.push(nums[i]);
        } else {
            once.push(nums[i]);
        }
        
        if (once.includes(nums[i]) && twice.includes(nums[i])) {
            once = once.filter(e => e != nums[i]);
        }
    }
    
    return once[0];
};
