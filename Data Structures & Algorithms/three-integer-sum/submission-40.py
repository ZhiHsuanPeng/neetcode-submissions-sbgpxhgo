class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort() 
        res = [] 

        for i in range(len(nums)): 
            if i > 0 and nums[i] == nums[i - 1]: 
                continue 

            l = i + 1 
            r = len(nums) - 1
             
            while l < r: 
                cur_sum = nums[i] + nums[l] + nums[r] 

                if cur_sum == 0: 
                    res.append([nums[i], nums[l], nums[r]]) 
                    while l + 1 < len(nums) and nums[l] == nums[l + 1]: 
                        l += 1 

                    l += 1 
                elif cur_sum < 0: 
                    l += 1 
                else: 
                    r -= 1 

        return res