class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        res = 0 
        stack = []

        for i in range(len(heights)): 
            curH = heights[i] 

            start = i
            while stack and stack[-1][1] > curH: 
                index, height = stack.pop() 
                res = max(res, ( i - index ) * height ) 
                start = index  

            stack.append((start, curH)) 

        for i in range(len(stack)):  
            start, height = stack[i]
            res = max(res, ( len(heights) - start ) * height) 

        return res