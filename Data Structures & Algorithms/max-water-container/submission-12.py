class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l = 0 
        r = len(heights) - 1  
        res = 0

        # l < r 
        while l < r:  
        # compute container's height and width
            h = min(heights[l], heights[r]) 
            w = r - l 
            res = max(res, h * w)

        # shift pointer
            if heights[l] < heights[r]: 
                l += 1 
            else: 
                r -= 1 

        return res