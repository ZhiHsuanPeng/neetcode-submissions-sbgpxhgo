class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = defaultdict(int) 

        l = 0 
        res = 0 
        for r in range(len(s)): 
            cur = s[r]   
            count[cur] += 1 

            curLen = r - l + 1
            while curLen - max(count.values()) > k: 
                deleted = s[l] 
                count[deleted] -= 1 
                l += 1 
                curLen = r - l + 1 

            res = max(res, r - l + 1)  

        return res

            