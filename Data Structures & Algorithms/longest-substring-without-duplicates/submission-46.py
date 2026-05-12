class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()  
        res = 0

        l = 0 
        for r in range(len(s)): 
            cur = s[r] 

            while cur in charSet: 
                deleted = s[l] 
                charSet.remove(deleted) 
                l += 1  
            
            charSet.add(cur)

            res = max(res, r - l + 1) 

        return res