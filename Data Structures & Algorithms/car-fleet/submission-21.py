class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        time = [] 

        for i in range(len(position)): 
            dist = target - position[i] 
            time_taken = dist / speed[i] 
            time.append((time_taken, - position[i]))  

        time.sort(key = lambda x: x[1])

        stack = []  
        print(time)

        for t in time: 
            if stack and stack[-1] >= t[0]: 
                continue 

            stack.append(t[0]) 

        return len(stack)