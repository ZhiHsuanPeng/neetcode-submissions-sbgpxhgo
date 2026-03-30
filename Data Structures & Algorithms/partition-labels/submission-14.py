class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        pos = {}  

        for i in range(len(s)): 
            pos[s[i]] = i 

        start = 0
        curMax = 0 
        res = [] 
        for i in range(len(s)): 
            cur = s[i] 
            curMax = max(curMax, pos[cur]) 

            if i == curMax: 
                res.append(curMax - start + 1) 
                start = curMax + 1
        
        return res
