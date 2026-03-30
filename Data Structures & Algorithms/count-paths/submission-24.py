class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        
        prev = [0] * (m + 1) 
        curr = [0] * (m + 1) 

        curr[0] = 1 
        
        for i in range(1, n + 1): 
            for j in range(1, m + 1):  
                
                curr[j] = prev[j] + curr[j - 1] 
            prev, curr = curr, [0] * (m + 1) 

        return prev[m]