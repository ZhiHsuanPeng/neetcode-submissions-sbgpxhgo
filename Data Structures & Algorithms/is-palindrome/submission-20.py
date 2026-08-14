class Solution:
    def isPalindrome(self, s: str) -> bool: 
        l = 0 
        r = len(s) - 1 

        while l < r: 
            while l < r and not self.isAlphNum(s[l]): 
                l += 1

            while l < r and not self.isAlphNum(s[r]): 
                r -= 1 

            if s[l].lower() != s[r].lower(): 
                return False  
            
            l += 1 
            r -= 1

        return True
         

    def isAlphNum(self, s):  
        s = ord(s)
        return ord('a') <= s <= ord('z') or ord('A') <= s <= ord('Z') or ord('0') <= s <= ord('9')