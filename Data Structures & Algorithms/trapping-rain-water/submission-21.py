class Solution:
    def trap(self, height: List[int]) -> int:
        # init needed variables  
        res = 0  
        # elements = [index, height]
        q = []

        # loop through height  
        for cur_index, cur_h in enumerate(height):  
            while q and q[-1][1] < cur_h: 
                bottom_index, bottom_h = q.pop() 
                if q:  
                    h_diff = min(cur_h, q[-1][1]) - bottom_h  
                    w_diff = cur_index - q[-1][0] - 1 
                    res += h_diff * w_diff  

            q.append([cur_index, cur_h]) 

        return res
