class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = {} 

        for i in range(len(s)): 
            cur = s[i] 
            last[cur] = i 

        res = [] 
        
        curLast = 0 
        start = 0 
        for i in range(len(s)): 
            curLast = max(curLast, last[s[i]]) 

            if i == curLast: 
                res.append(curLast - start + 1) 
                start = i + 1  
        
        return res
