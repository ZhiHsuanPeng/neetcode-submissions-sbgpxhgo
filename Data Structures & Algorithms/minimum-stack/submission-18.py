class MinStack:

    def __init__(self):
        self.q = [] 
        self.minStack = []

    def push(self, val: int) -> None:
        self.q.append(val) 

        if not self.minStack: 
            self.minStack.append(val) 
            return 

        last = self.minStack[-1] 
        
        if last < val: 
            self.minStack.append(last) 
        else: 
            self.minStack.append(val)

    def pop(self) -> None:
        self.q.pop() 
        self.minStack.pop()

    def top(self) -> int:
        return self.q[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
