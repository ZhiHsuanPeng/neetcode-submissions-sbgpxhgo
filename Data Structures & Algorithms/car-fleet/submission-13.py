class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pos_time = [] 

        for index, p in enumerate(position): 
            pos_time.append((p, (target - p) / speed[index] ))  

        print(pos_time) 

        pos_time.sort( key = lambda x: -x[0] ) 

        stack = [] 

        for pos, time in pos_time: 
            if (stack and stack[-1] < time) or not stack: 
                stack.append(time)  

        return len(stack)