class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort() 
        num_set = set()  

        for i in range(len(nums)): 
            l = i + 1 
            r = len(nums) - 1
             
            while l < r: 
                cur_sum = nums[i] + nums[l] + nums[r] 

                if cur_sum == 0: 
                    num_set.add(tuple([nums[i], nums[l], nums[r]]))  

                    l += 1 
                elif cur_sum < 0: 
                    l += 1 
                else: 
                    r -= 1 

        return [ list(x) for x in num_set ]