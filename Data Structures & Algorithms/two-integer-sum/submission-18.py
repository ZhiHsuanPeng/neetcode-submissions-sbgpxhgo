class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        comp = {} 

        for index, num in enumerate(nums):  
            val = target - num
            if val in comp: 
                return [comp.get(val), index] 

            comp[num] = index 