class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool: 
        if len(s2) < len(s1): 
            return False 

        bucket = [0] * 26 

        for i in range(len(s1)): 
            bucket[ord(s1[i]) - ord('a')] += 1 
            bucket[ord(s2[i]) - ord('a')] -= 1 

        matches = 0 

        for num in bucket: 
            if num == 0: 
                matches += 1 

        if matches == 26: 
            return True 

        l = 0
        for r in range(len(s1), len(s2)):  
            deleted = ord(s2[l]) - ord('a') 

            bucket[deleted] += 1 
            if bucket[deleted] == 0: 
                matches += 1  
            elif bucket[deleted] == 1: 
                matches -= 1 

            added = ord(s2[r]) - ord('a')

            bucket[added] -= 1 
            if bucket[added] == 0: 
                matches += 1 
            elif bucket[added] == -1: 
                matches -= 1 

            if matches == 26: 
                return True  

            l += 1

        return matches == 26
