class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        dp = [0] * (len(t) + 1)

        for r in range(len(s) - 1, -1, -1):

            prevDiag = 1  # dp[r+1][len(t)]

            for c in range(len(t) - 1, -1, -1):

                temp = dp[c]

                if s[r] == t[c]:
                    dp[c] = dp[c] + prevDiag

                prevDiag = temp

        return dp[0]