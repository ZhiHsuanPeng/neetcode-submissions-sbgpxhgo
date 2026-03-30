class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q = deque() 
        l = 0 
        r = 0 
        res = [] 

        while r < len(nums): 
            cur = nums[r]
            while q and cur > nums[q[-1]]: 
                q.pop() 

            q.append(r) 

            if q[0] < l: 
                q.popleft() 

            if r + 1 >= k: 
                res.append(nums[q[0]]) 
                l += 1 

            r += 1  
            
        return res