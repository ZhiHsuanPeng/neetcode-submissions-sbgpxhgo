class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool: 
        if len(s1) > len(s2): 
            return False 

        bucket = [0] * 26 

        for i in range(len(s1)): 
            bucket[ord(s1[i]) - ord('a')] += 1 
            bucket[ord(s2[i]) - ord('a')] -= 1 

        matches = 0 

        for val in bucket: 
            if val == 0: 
                matches += 1 
        
        l = 0
        for r in range(len(s1), len(s2)):  
            if matches == 26: 
                return True 

            idx = ord(s2[l]) - ord('a')
            bucket[idx] += 1  
            if bucket[idx] == 0: 
                matches += 1 
            elif bucket[idx] == 1: 
                matches -= 1 

            idx = ord(s2[r]) - ord('a')
            bucket[idx] -= 1   
            if bucket[idx] == 0: 
                matches += 1 
            elif bucket[idx] == -1: 
                matches -= 1 

            l += 1 

        return matches == 26