class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = defaultdict(int) 
        count[0] = 1 
        res = 0
        prefixSum = 0 

        for num in nums: 
            prefixSum += num 

            if prefixSum - k in count: 
                res += count[prefixSum - k] 

            count[prefixSum] += 1  
            
        return res