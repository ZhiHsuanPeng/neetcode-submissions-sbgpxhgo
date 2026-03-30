class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char = set() 
        l = 0 
        res = 0 
        for r in range(len(s)): 
            cur = s[r] 
            while(cur in char): 
                deleted = s[l]
                char.remove(deleted) 
                l += 1  

            char.add(cur)
            res = max(res, r - l + 1) 

        return res