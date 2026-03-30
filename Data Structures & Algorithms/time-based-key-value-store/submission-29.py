class TimeMap:

    def __init__(self):
        self.store = defaultdict(list) 

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        data = self.store[key] 

        l = 0 
        r = len(data) - 1  
        res = -1

        while l <= r: 
            m = (l + r) // 2 

            if data[m][0] <= timestamp: 
                l = m + 1 
                res = m 
            else: 
                r = m - 1

        return data[res][1] if res != -1 else "" 