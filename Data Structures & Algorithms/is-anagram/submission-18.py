class Solution:
    def isAnagram(self, s: str, t: str) -> bool: 
        if len(s) != len(t): 
            return False 

        tCount = {} 
        sCount = {} 

        for i in range(len(t)): 
            tCount[t[i]] = 1 + tCount.get(t[i], 0) 
            sCount[s[i]] = 1 + sCount.get(s[i], 0) 

        return tCount == sCount
        