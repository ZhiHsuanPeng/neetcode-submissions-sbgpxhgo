class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        c = set()  
        res = 0

        l = 0 
        for r in range(len(s)):  
            cur = s[r] 
            while cur in c:
                deleted = s[l] 
                c.remove(deleted) 
                l += 1 

            c.add(cur)
            res = max(res, r - l + 1) 

        return res