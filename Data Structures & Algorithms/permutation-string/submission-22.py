class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool: 
        if len(s1) > len(s2): 
            return False 
            
        bucket = [0] * 26 

        for i in range(len(s1)): 
            bucket[ord(s1[i]) - ord('a')] += 1 
            bucket[ord(s2[i]) - ord('a')] -= 1 

        if self.isValid(bucket): 
            return True
        
        l = 0
        for r in range(len(s1), len(s2)): 
            bucket[ord(s2[l]) - ord('a')] += 1 
            bucket[ord(s2[r]) - ord('a')] -= 1  
            l += 1 
            if self.isValid(bucket): 
                return True 

        return False

    def isValid(self, bucket): 
        isValid = True
        
        for val in bucket: 
            if val != 0: 
                isValid = False

        return isValid