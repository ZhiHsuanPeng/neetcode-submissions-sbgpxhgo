class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strDict = dict()

        for s in strs: 
            key = ''.join(sorted(s)) 

            if key not in strDict:
                strDict[key] = [] 

            strDict[key].append(s) 

        return list(strDict.values())