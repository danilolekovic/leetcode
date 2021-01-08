class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle == "") return 0;
        
        for (int i = 0; i < haystack.size(); i++) {
            if (i + needle.size() > haystack.size()) return -1;
            
            int m = i;
            
            for (int j = 0; j < needle.size(); j++) {
                if (needle[j] == haystack[m]) {
                    if (j == needle.size() - 1) return i;
                    m++;
                } else {
                    break;
                }
            }
        }
        
        return -1;
    }
};
