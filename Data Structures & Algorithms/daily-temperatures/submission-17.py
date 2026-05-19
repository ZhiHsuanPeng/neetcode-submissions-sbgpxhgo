class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures) 

        q = [] 

        for i in range(len(temperatures)):  
            cur = temperatures[i] 

            while q and cur > temperatures[q[-1]]: 
                last = q.pop() 

                res[last] = i - last 

            q.append(i) 

        return res