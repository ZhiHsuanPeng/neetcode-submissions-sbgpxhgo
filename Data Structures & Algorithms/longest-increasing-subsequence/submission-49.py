class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        arr = [] 

        for num in nums: 
            cur = -1 

            l = 0 
            r = len(arr) - 1 

            while l <= r: 
                m = (l + r) // 2 

                if num <= arr[m]: 
                    cur = m 
                    r = m - 1 
                else: 
                    l = m + 1 

            if cur == -1: 
                arr.append(num) 
            else: 
                arr[cur] = num 

        return len(arr)