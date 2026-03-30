class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [ [] for _ in range(len(nums) + 1) ] 
        count = Counter(nums) 

        for val, count in count.items(): 
            bucket[count].append(val) 

        res = []
        for i in range(len(bucket) - 1, -1, -1): 
            cur = bucket[i] 

            for num in cur:  
                k -= 1
                res.append(num) 

                if k == 0: 
                    return res  

