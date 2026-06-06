class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        
        pre = 0 
        comp = defaultdict(int)
        comp[0] = 1  
        res = 0

        for num in nums: 
            pre += num 

            if pre - k in comp: 
                res += comp[pre - k] 

            comp[pre] += 1 

        return res