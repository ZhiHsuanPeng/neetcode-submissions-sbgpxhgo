class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        res = 0 
        stack = [] 

        for i in range(len(heights)): 
            cur = heights[i]  
            start = i

            while stack and cur <= stack[-1][1]: 
                lastPos, lastHeight = stack.pop() 
                w = i - lastPos 
                res = max(res, w * lastHeight) 
                start = lastPos 

            stack.append([start, cur]) 

        for pos, height in stack: 
            w = len(heights) - pos 
            res = max(res, w * height) 

        return res