class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        posTime = [ (position[i], (target - position[i]) / speed[i] ) for i in range(len(position)) ]
        posTime.sort(reverse = True) 

        stack = [] 

        for _, time in posTime: 
            if not stack: 
                stack.append(time) 
                continue 

            if stack[-1] < time: 
                stack.append(time) 

        return len(stack)