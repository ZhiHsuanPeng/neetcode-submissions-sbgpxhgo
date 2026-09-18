class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        q = deque(['0000']) 
        visited = set(['0000'])  
        d = set(deadends) 

        res = 0 

        while q: 
            for _ in range(len(q)): 
                cur = q.popleft() 
                if cur == target: 
                    return res  

                if cur in d: 
                    continue

                for i in range(8): 
                    position = i // 2 
                    direction = i % 2  
                    number = int(cur[position])  
                    next = list(cur)

                    if direction == 0:  
                        if number == 0: 
                            number = 9 
                        else: 
                            number -= 1   
                    else: 
                        if number == 9: 
                            number = 0 
                        else: 
                            number += 1 
                           
                    next[position] = str(number)  
                    next = "".join(next)

                    if next not in visited:  
                        q.append(next) 
                        visited.add(next)  

            res += 1 

        return -1
                        