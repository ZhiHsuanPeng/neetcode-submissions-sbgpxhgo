class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) 

        for s in strs: 
            bkt = [0] * 26

            for c in s:
                bkt[ord(c) - ord('a')] += 1  
            
            res[tuple(bkt)].append(s)

        return list(res.values())