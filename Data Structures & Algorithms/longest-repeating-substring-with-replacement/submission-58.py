class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0 
        char = defaultdict(int)  
        curMax = 0

        l = 0  
        for r in range(len(s)): 
            cur = s[r] 
            char[cur] += 1
            curMax = max(char[cur], curMax) 

            while r - l + 1 - curMax > k: 
                deleted = s[l] 
                char[deleted] -= 1 
                l += 1 

            res = max(res, r - l + 1) 

        return res