class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == '0': 
            return 0 

        prev1 = 1 
        prev2 = 1 

        for i in range(2, len(s) + 1):  
            cur = 0

            if s[i - 1] != '0': 
                cur += prev2                 

            if '10' <= s[i - 2: i] <= '26': 
                cur += prev1 

            prev1 = prev2 
            prev2 = cur 

        return prev2