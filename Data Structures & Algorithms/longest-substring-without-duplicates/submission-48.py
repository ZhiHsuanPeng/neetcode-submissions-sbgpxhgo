class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0 
        charSet = set()  
        res = 0

        for r in range(len(s)): 
            cur = s[r] 

            while cur in charSet: 
                deleted = s[l] 
                charSet.remove(deleted) 
                l += 1 

            charSet.add(cur) 
            res = max(r - l + 1, res) 

        return res