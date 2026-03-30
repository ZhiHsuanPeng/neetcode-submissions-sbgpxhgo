class Solution:
    def numDecodings(self, s: str) -> int:
         
        def rec(i): 
            if i == len(s): 
                return 1 

            if s[i] == '0':
                return 0

            res = 0 
            res = rec(i + 1) 

            if i + 1 < len(s) and int(s[i:i+2]) <= 26: 
                res += rec(i + 2) 

            return res 

        return rec(0)