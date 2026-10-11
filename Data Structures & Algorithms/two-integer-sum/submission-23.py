class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d =  defaultdict(int) 

        for i in range(len(nums)):  
            half = target - nums[i] 

            if half in d: 
                return [ d[half], i ] 
            else: 
                d[nums[i]] = i 