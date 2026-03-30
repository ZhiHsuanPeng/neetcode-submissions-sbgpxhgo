class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = defaultdict(int) 
        res = 0 
        prefix = 0 
        count[0] = 1 

        for num in nums: 
            prefix += num 
             
            if prefix - k in count: 
                res += count[prefix - k] 

            count[prefix] += 1 

        return res