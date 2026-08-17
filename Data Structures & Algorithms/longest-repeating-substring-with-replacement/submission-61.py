class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = defaultdict(int)  
        curMax = 0 
        res = 0
        l = 0  

        for r in range(len(s)): 
            cur = s[r] 
            count[cur] += 1 
            curMax = max(curMax, count[cur]) 

            while r - l + 1 - curMax > k: 
                deleted = s[l] 
                count[deleted] -= 1 
                l += 1 

            res = max(res, r - l + 1) 

        return res