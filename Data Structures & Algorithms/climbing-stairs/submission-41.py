class Solution:
    def climbStairs(self, n: int) -> int:
        pre = 1 
        pre2 = 1 

        for i in range(2, n + 1): 
            cur = pre + pre2 
            pre = pre2 
            pre2 = cur 

        return pre2