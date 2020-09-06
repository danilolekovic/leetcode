/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let a = [];
    let len = nums.length;
    
    for (let i = 0; i < len; i++) {
        a[(i + k) % len] = nums[i];
    }
    
    for (let i = 0; i < len; i++) {
        nums[i] = a[i];
    }
};
