class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0 
        char = defaultdict(int)  

        l = 0  
        for r in range(len(s)): 
            cur = s[r] 
            char[cur] += 1

            while r - l + 1 - max(char.values()) > k: 
                deleted = s[l] 
                char[deleted] -= 1 
                l += 1 

            res = max(res, r - l + 1) 

        return res