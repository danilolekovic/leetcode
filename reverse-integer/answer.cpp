#include <limits.h>

class Solution {
public:
    int reverse(int x) {
        int reversedNumber = 0, remainder;
        
        while (x != 0) {
            remainder = x % 10;
            
            // nous devons verifier les limites.. je ne sais pas what else we could do besides this.. perhaps try/catch?
            if (reversedNumber > INT_MAX / 10 || reversedNumber < INT_MIN / 10) {
                return 0;
            }
            
            reversedNumber = reversedNumber * 10 + remainder;
            x /= 10;
        }
        
        return reversedNumber;
    }
};
