class Solution {
public:
    int lengthOfLastWord(string s) {
        s.erase(0, s.find_first_not_of(" \t"));
        s.erase(s.find_last_not_of(" \t") + 1);
        
        if (s == "")
            return 0;
        
        string lastWord = "";
        
        for (int i = 0; i < s.length(); i++) {
            
            if (s[i] == ' ' && i + 1 != s.length())
                lastWord = "";
            else
                lastWord += s[i];
            
        }
        
        
        return lastWord.length();
    }
};
