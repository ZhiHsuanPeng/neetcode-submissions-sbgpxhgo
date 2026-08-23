class StockSpanner:

    def __init__(self):
        # (position, value)
        self.stack = []
        self.time = 0

    def next(self, price: int) -> int:  
        if not self.stack: 
            self.stack.append((self.time, price)) 
            self.time += 1 
            return 1

        lastPos = self.time
        while self.stack and price >= self.stack[-1][1]:  
            pos, _ = self.stack.pop() 
            lastPos = pos  

        self.stack.append((lastPos, price)) 
        curTime = self.time
        self.time += 1  
        return curTime - lastPos + 1

        


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)