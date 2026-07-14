class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        posTime = [] 

        for i in range(len(position)): 
            dist = target - position[i] 
            time = dist / speed[i] 
            posTime.append((position[i], time)) 

        posTime.sort(reverse = True, key = lambda x: x[0]) 

        stack = [] 

        for _, time in posTime: 
            if not stack: 
                stack.append(time) 
                continue 

            if stack[-1] < time: 
                stack.append(time) 

        return len(stack)