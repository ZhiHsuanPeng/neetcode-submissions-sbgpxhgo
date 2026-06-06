class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        cnt = Counter(nums) 

        freq = [ [] for i in range(len(nums) + 1) ] 

        for num in cnt: 
            c = cnt[num] 
            freq[c].append(num) 

        res = [] 

        for i in range(len(freq) - 1, -1, -1): 
            for num in freq[i]: 
                res.append(num) 
                k -= 1 
                if k == 0: 
                    return res 

