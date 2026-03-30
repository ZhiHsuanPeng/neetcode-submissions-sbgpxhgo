class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        numSet = set() 

        l = 0  
        res = 0
        for r in range(len(s)): 
            cur = s[r] 
            while cur in numSet: 
                deleted = s[l] 
                numSet.remove(deleted) 
                l += 1 

            numSet.add(cur) 
            res = max(res, r - l + 1) 

        return res