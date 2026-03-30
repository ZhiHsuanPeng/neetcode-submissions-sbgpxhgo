class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [[] for _ in range(len(nums) + 1)] 
        count = defaultdict(int)  

        for num in nums: 
            count[num] += 1 

        for key, value in count.items(): 
            bucket[value].append(key) 

        res = []
        for i in range(len(bucket) - 1, -1, -1): 
            cur = bucket[i] 
            for val in cur: 
                res.append(val) 
                if len(res) == k: 
                    return res 
               

