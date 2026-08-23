class StockSpanner:

    def __init__(self):
        # (position, value)
        self.stack = []
        self.time = 0

    def next(self, price: int) -> int:  
        start = self.time

        while self.stack and price >= self.stack[-1][1]: 
            start = self.stack.pop()[0]

        self.time += 1
        self.stack.append((start, price)) 
        return self.time - start

        


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)