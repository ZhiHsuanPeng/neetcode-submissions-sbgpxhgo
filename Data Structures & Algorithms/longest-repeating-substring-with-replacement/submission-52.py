class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0 
        count = defaultdict(int) 
        maxLen = 0  
        res = 0

        for r in range(len(s)): 
            cur = s[r] 
            count[cur] += 1
            maxLen = max(maxLen, count[cur]) 

            while r - l + 1 - maxLen > k: 
                deleted = s[l] 
                count[deleted] -= 1 
                l += 1

            res = max(res, r - l + 1) 

        return res