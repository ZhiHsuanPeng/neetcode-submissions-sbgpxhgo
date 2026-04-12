class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = defaultdict(int) 
        count[0] = 1 
        pre = 0 
        
        res = 0
        for num in nums: 
            pre += num 

            if pre - k in count: 
                res += count[pre - k]  

            count[pre] += 1

        return res