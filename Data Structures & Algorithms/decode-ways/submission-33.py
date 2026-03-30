class Solution:
    def numDecodings(self, s: str) -> int:
        

        def dfs(i):  
            if i == len(s): 
                return 1 

            if s[i] == '0': 
                return 0 

            res = 0 
            # take 1 digit
            res += dfs(i + 1) 
            # take 2 digits
            if i + 1 < len(s) and int(s[i: i + 2]) <= 26:  
                res += dfs(i + 2) 

            return res 

        return dfs(0)

            