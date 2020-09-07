function containsDuplicate(nums: number[]): boolean {
    var uniques:number[] = [];
    
    for (var n in nums) {
        if (uniques.includes(nums[n])) {
            return true;
        } else {
            uniques.push(nums[n]);
        }
    }
    
    return false;
};
