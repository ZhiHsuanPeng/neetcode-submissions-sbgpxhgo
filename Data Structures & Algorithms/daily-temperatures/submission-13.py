class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [ 0 for _ in range(len(temperatures)) ] 

        for i in range(len(temperatures)): 
            cur = temperatures[i] 

            for j in range(i + 1, len(temperatures)): 
                nxt = temperatures[j] 

                if nxt > cur: 
                    res[i] = j - i 
                    break 

        return res