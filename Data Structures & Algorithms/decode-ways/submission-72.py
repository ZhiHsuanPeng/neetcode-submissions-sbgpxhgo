class Solution:
    def numDecodings(self, s: str) -> int:  
        if s[0] == '0': 
            return 0 

        prev1 = 1 
        prev2 = 1 

        for i in range(2, len(s) + 1):  
            cur = 0 

            if s[i - 1] != '0':  # Can also simplify this
                cur += prev2    

            two_digit = int(s[i - 2: i])  # Convert to int
            if 10 <= two_digit <= 26: 
                cur += prev1

            prev1 = prev2 
            prev2 = cur 

        return prev2