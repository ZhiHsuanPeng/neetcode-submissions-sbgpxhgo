class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        res = float('inf')  
        curSum = 0
        l = 0 
        count = {} 

        for r in range(len(nums)): 
            cur = nums[r] 

            if cur not in count: 
                count[cur] = 0 

            count[cur] += 1 
            curSum += cur 

            while curSum >= target: 
                res = min(res, r - l + 1) 
                deleted = nums[l] 
                count[deleted] -= 1 
                curSum -= deleted 
                l += 1 

        return res if res != float('inf') else 0
