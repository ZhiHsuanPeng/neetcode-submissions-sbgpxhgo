class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)  
        stack = []

        for cur_index, cur_t in enumerate(temperatures): 
            while stack and cur_t > stack[-1][1]: 
                target_index, target_t = stack.pop() 
                res[target_index] = cur_index - target_index 

            stack.append((cur_index, cur_t)) 

        return res