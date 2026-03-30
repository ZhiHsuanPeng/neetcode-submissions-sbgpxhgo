class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2) < len(s1): 
            return False 

        
        b1 = [0] * 26 
        for c in s1:
            b1[ord(c) - ord('a')] += 1 

        b2 = [0] * 26
        for i in range(len(s1)): 
            b2[ord(s2[i]) - ord('a')] += 1 

        if b1 == b2: 
            return True 

        l = 0
        for r in range(len(s1), len(s2)): 
            deleted = s2[l] 
            cur = s2[r] 
            b2[ord(deleted) - ord('a')] -= 1 
            b2[ord(cur) - ord('a')] += 1  
            l += 1
            if b1 == b2: 
                return True 

        return False

        