class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total = 0 
        start = 0 
        cur = 0 

        for i in range(len(gas)): 
            diff = gas[i] - cost[i] 

            total += diff  
            cur += diff 
            if cur < 0:
                start = i + 1 
                cur = 0 

        return start if total >= 0 else -1
