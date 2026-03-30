class Solution:
    def numDecodings(self, s: str) -> int:
        
        def decode(i): 
            if i >= len(s): 
                return 1 

            if s[i] == '0': 
                return 0 

            res = decode(i + 1) 

            if 10 <= int(s[i: i + 2]) <= 26: 
                res += decode(i + 2) 

            return res 

        return decode(0)