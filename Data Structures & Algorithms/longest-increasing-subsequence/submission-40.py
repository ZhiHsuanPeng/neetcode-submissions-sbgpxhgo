class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if len(nums) == 0: 
            return 0 

        res = [nums[0]] 

        for i in range(1, len(nums)): 
            l = 0 
            r = len(res) - 1 
            index = -1 

            while l <= r: 
                mid = (l + r) // 2 

                if res[mid] >= nums[i]: 
                    index = mid 
                    r = mid - 1 
                else: 
                    l = mid + 1 

            if index == -1: 
                res.append(nums[i]) 
            else: 
                res[index] = nums[i] 

        return len(res)