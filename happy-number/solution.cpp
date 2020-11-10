class Solution {
public:
    bool isHappy(int n) {
        int result = 0;
        int num = 0;
        int c = 0;
    
        while (result != 1) {
            result = 0;
            
            while (n) {
                num = n % 10;
                result = result + num * num;
                n = n / 10;
            }
            
            n = result;
            c++;
            
            if (c > 100) {
                return false;
            }
        }
        
        if (result == 1) {
            return true;
        }
        
        return false;
    }
};
