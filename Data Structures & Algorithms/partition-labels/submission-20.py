class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastIdx = defaultdict(int) 

        for i in range(len(s)): 
            lastIdx[s[i]] = i 


        start = 0 
        curLast = 0
        res = [] 

        for i in range(len(s)):  
            curLast = max(curLast, lastIdx[s[i]])
            if i == curLast: 
                res.append(i - start + 1) 
                start = i + 1 

        return res