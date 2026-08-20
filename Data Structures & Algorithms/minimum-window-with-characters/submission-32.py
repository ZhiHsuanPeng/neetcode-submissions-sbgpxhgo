class Solution:
    def minWindow(self, s: str, t: str) -> str:
        count = Counter(t) 
        need = len(count)  

        resStart = -1 
        resLen = float('inf')  

        l = 0 

        for r in range(len(s)): 
            cur = s[r]  

            if cur in count:  
                count[cur] -= 1 
                if count[cur] == 0:  
                    need -= 1  

            while need == 0: 
                if r - l + 1 < resLen: 
                    resLen = r - l + 1 
                    resStart = l 

                deleted = s[l]
                if deleted in count:  
                    count[deleted] += 1 
                    if count[deleted] == 1: 
                        need += 1

                l += 1 

        return s[resStart: resStart + resLen] if resStart != -1 else ""

