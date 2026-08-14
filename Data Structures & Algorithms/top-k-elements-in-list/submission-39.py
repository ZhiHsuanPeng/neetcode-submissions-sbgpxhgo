class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [ [] for _ in range(len(nums) + 1) ] 
        count = Counter(nums)
 
        for num in count: 
            freq = count[num] 

            bucket[freq].append(num) 

        res = [] 

        for i in range(len(bucket) - 1, -1, -1): 
            arr = bucket[i] 

            for n in arr: 
                res.append(n) 

                if len(res) == k: 
                    return res 