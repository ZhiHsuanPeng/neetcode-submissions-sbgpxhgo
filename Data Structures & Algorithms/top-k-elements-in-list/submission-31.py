class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = Counter(nums) 
        group = [ [] for _ in range(len(nums) + 1) ] 

        for num in freq: 
            f = freq[num] 
            group[f].append(num)


        res = []
        for i in range(len(nums), -1, -1): 
            gp = group[i] 

            for num in gp: 
                res.append(num) 
                if len(res) == k: 
                    return res