class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastIndex = {} 

        for i, c in enumerate(s): 
            lastIndex[c] = i 

        res = [] 
        curEnd = 0  
        curStart = 0
        for i, c in enumerate(s): 
            curEnd = max(curEnd, lastIndex[c]) 

            if i == curEnd: 
                res.append(curEnd - curStart + 1) 
                curStart = i + 1 

        return res