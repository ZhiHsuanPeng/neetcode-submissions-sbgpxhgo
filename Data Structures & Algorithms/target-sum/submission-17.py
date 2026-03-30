class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dp = defaultdict(int)
        dp[0] = 1

        for num in nums: 
            next = defaultdict(int)

            for val, cnt in dp.items(): 
                next[val + num] += cnt 
                next[val - num] += cnt 

            dp = next

        return dp[target]
        
    