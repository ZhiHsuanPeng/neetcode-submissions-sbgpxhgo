class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        
        def dfs(i, last): 
            if i == len(nums): 
                return 0 

            cur = dfs(i + 1, last) 

            if last == None or nums[i] > last: 
                cur = max(cur, 1 + dfs(i + 1, nums[i])) 

            return cur 

        return dfs(0, None)