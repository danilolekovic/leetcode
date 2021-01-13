class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        if (target > nums[nums.size() - 1]) return nums.size();
        
        int left = 0;
        int right = nums.size() - 1;
        
        while (left < right) {
            int middle = (left + (right - 1)) / 2;
            
            if (target > nums[middle])
                left = middle + 1;
            else
                right = middle;
        }
        
        return left;
    }
};
