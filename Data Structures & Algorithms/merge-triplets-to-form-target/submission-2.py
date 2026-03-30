class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        temp = [ float('-inf') ] * 3
        
        for t in triplets: 
            x, y, z = t 

            if x > target[0] or y > target[1] or z > target[2]: 
                continue 

            temp[0] = max(temp[0], x) 
            temp[1] = max(temp[1], y) 
            temp[2] = max(temp[2], z) 

            if temp[0] == target[0] and temp[1] == target[1] and temp[2] == target[2]: 
                return True 

        return False