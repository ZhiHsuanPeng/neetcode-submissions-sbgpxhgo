class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2): 
            return False 
            
        count = Counter(s1) 

        for i in range(len(s1)):  
            count[s2[i]] -= 1 

        if all( value == 0 for value in count.values() ): 
            return True 

        l = 0
        for r in range(len(s1), len(s2)): 
            cur = s2[r] 
            deleted = s2[l] 
            count[cur] -= 1 
            count[deleted] += 1  
            l += 1

            if all( value == 0 for value in count.values() ): 
                return True 

        return False