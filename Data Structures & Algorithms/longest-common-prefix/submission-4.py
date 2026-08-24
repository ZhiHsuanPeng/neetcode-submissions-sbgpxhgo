class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = strs[0] 

        for i in range(1, len(strs)):
            l = 0 
            r = 0 

            while l < len(res) and r < len(strs[i]): 
                if res[l] == strs[i][r]: 
                    l += 1 
                    r += 1 
                else: 
                    break 

            res = res[0 : l] 

        return res