class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = strs[0] 

        for s in strs: 
            i = 0 
            j = 0 

            while i < len(res) and j < len(s): 
                if res[i] == s[j]: 
                    i += 1 
                    j += 1 
                else:
                    break 

            res = res[0 : i] 

        return res