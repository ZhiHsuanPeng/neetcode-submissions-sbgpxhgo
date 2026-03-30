class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0 
        r = len(nums) - 1 

        while l <= r: 
            m = (r + l) // 2 

            if nums[m] == target: 
                return m 

            if nums[l] <= nums[m]: 
                if nums[l] <= target < nums[m]: 
                    r = m - 1 
                else: 
                    l = m + 1 
            else: 
                if nums[r] >= target > nums[m]: 
                    l = m + 1 
                else: 
                    r = m - 1 
        
        return -1