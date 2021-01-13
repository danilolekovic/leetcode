class Solution {
public:
    int search(vector<int>& nums, int target) {
        int min = 0;
        int max = nums.size() - 1;
        
        int guess = (max + min) / 2;
        
        if (nums[guess] == target) return guess;
        if (max < min) return -1;
        
        while (nums[guess] != target) {
            if (nums[guess] < target) {
                min = guess + 1;
                guess = (max + min) / 2;
            } else {
                max = guess - 1;
                guess = (max + min) / 2;
            }
            
            if (nums[guess] == target) break;
            if (max < min) return -1;
        }
        
        return guess;
    }
};
