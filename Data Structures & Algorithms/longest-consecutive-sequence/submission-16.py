class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums) 

        res = 0 
        for num in num_set: 
            if num - 1 in num_set: 
                continue; 

            cnt = 1 
            cur = num 
            while cur + 1 in num_set: 
                cnt += 1 
                cur = cur + 1 

            res = max(res, cnt) 

        return res    
