class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxEnding, minEnding = 1, 1 
        res = float('-inf') 

        for num in nums:  
            curMaxEnding = maxEnding
            maxEnding = max(maxEnding * num, minEnding * num, num)  
            minEnding = min(minEnding * num, curMaxEnding * num, num) 

            res = max(maxEnding, minEnding, res) 

        return res