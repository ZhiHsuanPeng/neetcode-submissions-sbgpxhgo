class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [] 
        res = 0

        for cur_index, cur_h in enumerate(heights):  
            insert_index = cur_index
            while stack and stack[-1][1] > cur_h: 
                target_index, target_h = stack.pop() 
                res = max(res, target_h * ( cur_index - target_index ) ) 
                insert_index = target_index 

            stack.append(( insert_index, cur_h )) 

        for cur_index, cur_h in stack: 
            w = len(heights) - cur_index 
            res = max(res, w * cur_h) 

        return res