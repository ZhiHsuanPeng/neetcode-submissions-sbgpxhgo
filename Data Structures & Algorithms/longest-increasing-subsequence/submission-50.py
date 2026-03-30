class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        res = [] 

        for num in nums: 
            i = -1 

            l = 0 
            r = len(res) - 1 

            while l <= r: 
                mid = (l + r) // 2 

                if res[mid] >= num: 
                    i = mid 
                    r -= 1 
                else: 
                    l += 1 

            if i == -1: 
                res.append(num) 
            else: 
                res[i] = num 

        return len(res) 