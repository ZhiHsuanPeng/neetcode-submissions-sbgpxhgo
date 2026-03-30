class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = [] 
        q = deque() 
        l = 0 
        r = 0 

        while r < len(nums): 
            cur = nums[r] 
            while q and nums[q[-1]] < cur:
                q.pop() 

            q.append(r)  
             
            if l > q[0]: 
                q.popleft() 

            if r + 1 >= k: 
                res.append(nums[q[0]])  
                l += 1

            r += 1  

        return res
            