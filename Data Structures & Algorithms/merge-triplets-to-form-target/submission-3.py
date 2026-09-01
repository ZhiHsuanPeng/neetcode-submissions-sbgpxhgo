class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        a = 0 
        b = 0 
        c = 0 

        for t in triplets: 
            if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]: 
                continue 

            a = max(t[0], a) 
            b = max(t[1], b) 
            c = max(t[2], c) 

        return (a == target[0] and b == target[1] and c == target[2])