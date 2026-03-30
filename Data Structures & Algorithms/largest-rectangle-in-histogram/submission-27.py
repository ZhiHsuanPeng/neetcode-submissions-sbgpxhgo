class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []  
        res = 0

        for i in range(len(heights)): 
            curH = heights[i] 

            start = i
            while stack and stack[-1][1] > curH: 
                index, height = stack.pop() 
                res = max(res, ( i - index ) * height ) 
                start = index 

            stack.append((start, curH)) 

        for i in range(len(stack)): 
            res = max(res, (len(heights) - stack[i][0]) * stack[i][1]) 

        return res