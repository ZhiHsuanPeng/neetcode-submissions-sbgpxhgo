class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int: 
        if amount == 0: 
            return 0 
            
        state = [False] * (amount + 1) 
        state[0] = True 
        q = deque([0])  

        res = 1 

        while q: 
            for _ in range(len(q)): 
                cur = q.popleft() 

                for c in coins: 
                    next = cur + c 
                    if next == amount: 
                        return res 

                    if next >= len(state) or state[next]: 
                        continue 

                    state[next] = True 
                    q.append(next) 

            res += 1 

        return -1
        