class Solution {
    public boolean isPalindrome(String s) {
        if (s == "") {
            return true;
        }
        
        s = s.replaceAll("[^a-zA-Z0-9]", "");
        
        String reversed = "";
        
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed = reversed + s.charAt(i);
        }
        
        return s.toLowerCase().equals(reversed.toLowerCase());
    }
}
