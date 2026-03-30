class Solution:
    def numDecodings(self, s: str) -> int:
        
        def dfs(i):  
            if i >= len(s): 
                return 1  

            if s[i] == '0': 
                return 0

            res = dfs(i + 1) 

            sliced = int(s[i: i + 2]) 
            if i + 1 < len(s) and sliced <= 26: 
                two = dfs(i + 2)  
                res += two

            return res 

        return dfs(0)

            