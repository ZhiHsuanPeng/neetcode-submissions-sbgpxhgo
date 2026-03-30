class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        time = [] 

        for i in range(len(position)): 
            dist = target - position[i] 
            time_taken = dist / speed[i] 
            time.append((position[i], time_taken))  

        time.sort(reverse = True)

        stack = []  

        for t in time: 
            if stack and stack[-1] >= t[1]: 
                continue 

            stack.append(t[1]) 

        return len(stack)