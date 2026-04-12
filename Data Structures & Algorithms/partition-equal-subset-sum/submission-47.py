class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums) 

        if total % 2 != 0: 
            return False 

        target = total // 2 
        bitmask = 1 

        for n in nums: 
            bitmask |= (bitmask << n) 

        return bool(( bitmask >> target ) & 1)