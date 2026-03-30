class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool: 
        if len(s1) + len(s2) != len(s3):
            return False

        rows = len(s1) 
        cols = len(s2) 

        dp = [ [ False for _ in range(cols + 1) ] for _ in range(rows + 1) ] 

        dp[rows][cols] = True 

        for r in range(rows, -1, -1): 
            for c in range(cols, -1, -1):  
                print(r, c)
                k = r + c  

                if r < len(s1) and s1[r] == s3[k] and dp[r + 1][c]: 
                    dp[r][c] = True 

                if c < len(s2) and s2[c] == s3[k] and dp[r][c + 1]: 
                    dp[r][c] = True 


        return dp[0][0]