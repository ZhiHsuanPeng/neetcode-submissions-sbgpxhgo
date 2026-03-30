class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        target = sum(nums) 
        if target % 2 != 0: 
            return False 

        target = target // 2 

        def dfs(start, cur): 
            if cur == target: 
                return True 

            if cur > target: 
                return False 

            for i in range(start, len(nums)): 
                cur += nums[i] 
                if dfs(i + 1, cur): 
                    return True 
                cur -= nums[i] 

            return False 

        return dfs(0, 0)