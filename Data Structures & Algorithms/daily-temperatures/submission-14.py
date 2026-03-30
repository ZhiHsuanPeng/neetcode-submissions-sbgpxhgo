class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures) 
        stack = [] 

        for i in range(len(temperatures)): 
            cur = temperatures[i] 

            while stack and stack[-1][1] < cur: 
                position, _ = stack.pop()  
                res[position] = i - position

            stack.append((i, cur)) 

        return res