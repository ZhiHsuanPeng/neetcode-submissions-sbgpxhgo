class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0 
        r = len(s) - 1 

        while l < r: 
            while l < r and not self.isAlphaNumber(s[l]): 
                l += 1 

            while l < r and not self.isAlphaNumber(s[r]): 
                r -= 1 

            if s[l].lower() != s[r].lower(): 
                return False  
            
            l += 1 
            r -= 1 

        return True


    def isAlphaNumber(self, s: str): 
        cur = ord(s) 

        return ord('a') <= cur <= ord('z') or ord('A') <= cur <= ord('Z') or ord('0') <= cur <= ord('9')