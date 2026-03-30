class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        end = {}

        for i, c in enumerate(s): 
            end[c] = i  

        res = [] 

        l = 0 
        curMax = 0
        for r in range(len(s)): 
            curMax = max(curMax, end[s[r]])
            if r == curMax: 
               res.append(r - l + 1)  
               l = r + 1 

        return res 