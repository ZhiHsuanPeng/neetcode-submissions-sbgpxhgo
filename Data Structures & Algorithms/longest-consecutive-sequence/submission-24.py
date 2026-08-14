class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums) 

        res = 0 

        for n in nums: 
            if n - 1 in numSet: 
                continue 

            cnt = 1 
            cur = n 

            while cur + 1 in numSet: 
                cur += 1 
                cnt += 1 

            res = max(res, cnt) 

        return res