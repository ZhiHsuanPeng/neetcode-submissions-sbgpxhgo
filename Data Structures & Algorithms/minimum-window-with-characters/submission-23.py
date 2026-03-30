class Solution:
    def minWindow(self, s: str, t: str) -> str:
        count = defaultdict(int) 

        for c in t: 
            count[c] += 1 

        remaining = len(count.keys()) 

        resStart = -1 
        resLen = len(s) + 1 

        l = 0 
        for r in range(len(s)): 
            cur = s[r] 
            if cur in count: 
                count[cur] -= 1 
            if cur in count and count[cur] == 0: 
                remaining -= 1 
            
            while remaining == 0:  
                curLen = r - l + 1  
                if curLen < resLen: 
                    resLen = curLen 
                    resStart = l 
                
                deleted = s[l] 
                if deleted in count: 
                    count[deleted] += 1  
                    if count[deleted] > 0: 
                        remaining += 1  

                l += 1
        
        return s[resStart: resStart + resLen] if resStart != -1 else ""