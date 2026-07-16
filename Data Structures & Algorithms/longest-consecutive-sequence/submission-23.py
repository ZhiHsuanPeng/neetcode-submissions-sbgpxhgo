class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums) 

        res = 0 

        for num in numSet: 
            if num - 1 in numSet: 
                continue 

            cur = num  
            cnt = 0
            while cur in numSet: 
                cur += 1 
                cnt += 1 

            res = max(res, cnt) 

        return res