class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strDict = defaultdict(list) 

        for s in strs: 
            key = ''.join(sorted(s)) 

            strDict[key].append(s) 

        return list(strDict.values())