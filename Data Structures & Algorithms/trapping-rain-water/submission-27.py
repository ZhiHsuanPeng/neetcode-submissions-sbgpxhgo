class Solution:
    def trap(self, height: List[int]) -> int:
        stack = [] 
        res = 0 

        for i in range(len(height)): 
            curH = height[i] 

            while stack and stack[-1][1] < curH: 
                position, mid_height = stack.pop() 

                if stack: 
                    w = i - stack[-1][0] - 1 
                    h = min(curH, stack[-1][1]) - mid_height  
                    res += w * h 

            stack.append((i, curH)) 

        return res