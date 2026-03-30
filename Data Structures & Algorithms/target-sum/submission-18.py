class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dp = defaultdict(int) 
        dp[0] = 1 

        for num in nums: 
            next = defaultdict(int) 

            for val, count in dp.items(): 
                next[val + num] += count 
                next[val - num] += count 

            dp = next 

        return dp[target]