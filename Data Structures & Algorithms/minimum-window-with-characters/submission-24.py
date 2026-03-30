class Solution:
    def minWindow(self, s: str, t: str) -> str:
        count = Counter(t) 
        need = len(count) 
        start = 0 
        minLen = len(s) + 1

        l = 0 
        for r in range(len(s)): 
            cur = s[r] 

            if cur in count: 
                count[cur] -= 1 
                if count[cur] == 0: 
                    need -= 1 

            while need == 0: 
                if r - l + 1 < minLen: 
                    minLen = r - l + 1 
                    start = l 

                deleted = s[l]
                l += 1 
                if deleted in count: 
                    count[deleted] += 1 
                    if count[deleted] == 1: 
                        need += 1 

        res = s[start: start + minLen] 
        return res if minLen != len(s) + 1 else ""