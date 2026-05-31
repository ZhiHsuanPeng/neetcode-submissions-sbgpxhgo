class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        curMax = 1 
        curMin = 1
        res = float('-inf')

        for n in nums: 
            temp = curMax
            curMax = max(n, n * curMax, n * curMin) 
            curMin = min(n, n * temp, n * curMin) 

            res = max(res, curMax) 

        return res