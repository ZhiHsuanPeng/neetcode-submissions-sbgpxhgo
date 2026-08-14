class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numPos = {} 

        for i in range(len(nums)): 
            half = target - nums[i] 

            if half in numPos: 
                return [ numPos[half], i ] 
            else: 
                numPos[nums[i]] = i
