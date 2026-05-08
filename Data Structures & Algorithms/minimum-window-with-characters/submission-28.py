class Solution:
    def minWindow(self, s: str, t: str) -> str:
        count = defaultdict(int) 

        for c in t: 
            count[c] += 1 

        need = len(count)
        l = 0 
        start = -1 
        minLen = len(s) + 1 

        for r in range(len(s)): 
            cur = s[r] 

            if cur in count: 
                count[cur] -= 1 
                if count[cur] == 0: 
                    need -= 1 

            while need == 0:  
                curLen = r - l + 1 
                if curLen < minLen: 
                    start = l 
                    minLen = curLen 

                deleted = s[l] 

                if deleted in count: 
                    count[deleted] += 1 
                    if count[deleted] == 1: 
                        need += 1  
                        
                l += 1 


        return s[start: start + minLen] if start != -1 else ""

            
