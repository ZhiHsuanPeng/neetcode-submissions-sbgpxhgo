class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        end = defaultdict(int) 

        for i, c in enumerate(s): 
            end[c] = i 

        curMax = 0 
        res = [] 
        l = 0  
        
        for i, c in enumerate(s): 
            curMax = max(end[c], curMax) 

            if curMax == i: 
                res.append(i - l + 1) 
                l = i + 1 

        return res