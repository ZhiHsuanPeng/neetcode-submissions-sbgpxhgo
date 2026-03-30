class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        count = {} 
        for idx, num in enumerate(nums): 
            diff = target - num 
            if diff in count: 
                return [count.get(diff), idx] 

            count[num] = idx