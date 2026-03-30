class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        mapping = defaultdict(int)
        for inner in nums:
            mapping[inner] += 1

        tuple_map = [ (key, mapping[key]) for key in mapping ]
        sorted_tuple_map = sorted(tuple_map, key = lambda x: x[1])

        print(sorted_tuple_map)  

        res = [] 

        for i in range(len(sorted_tuple_map) - 1, -1, -1): 
            res.append(sorted_tuple_map[i][0]) 
            if len(res) == k: 
                return res

