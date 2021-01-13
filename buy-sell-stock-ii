class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minProfit = 0, maxProfit = -(1e9 + 5);
        
        for (int x : prices) {
            maxProfit = max(maxProfit, minProfit - x);
            minProfit = max(minProfit, maxProfit + x);
        }
        
        return minProfit;
    }
};
