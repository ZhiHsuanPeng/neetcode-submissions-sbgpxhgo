class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = temperatures
        res = [0] * len(n)   
        stack = [] 

        for i in range(len(n)): 
            cur_temp = n[i] 
            while stack and stack[-1][0] < cur_temp: 
                temp, index =  stack.pop() 
                res[index] = i - index 

            stack.append((cur_temp, i)) 

        return res            


        