class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = defaultdict(int)

        for i in range(len(s)): 
            cur = s[i] 
            last[cur] = i  

        res = []  
        start = 0 
        curEnd = 0

        for i in range(len(s)): 
            cur = s[i]  
            curEnd = max(last[cur], curEnd)

            if curEnd == i: 
                res.append(i - start + 1) 
                start = i + 1 
                curEnd = i + 1 

        return res