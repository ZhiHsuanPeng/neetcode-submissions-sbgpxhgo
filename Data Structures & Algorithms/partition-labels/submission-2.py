class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastIndex = {} 

        for i in range(len(s)): 
            cur = s[i] 
            lastIndex[cur] = i 

        
        res = [] 
        start = 0 
        end = 0 

        for i in range(len(s)): 
            cur = s[i] 

            end = max(end, lastIndex[cur]) 

            if i == end: 
                res.append(end - start + 1) 
                start = i + 1
                end = i + 1 

        return res