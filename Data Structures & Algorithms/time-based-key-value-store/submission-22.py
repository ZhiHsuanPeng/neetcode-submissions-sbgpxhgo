class TimeMap:

    def __init__(self):
        self.store = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        pairs = self.store[key] 

        l = 0 
        r = len(pairs) - 1 
        res = ''

        while l <= r: 
            mid = (l + r) // 2
            val, time = pairs[mid] 

            if time <= timestamp: 
                res = val 
                l = mid + 1 
            else: 
                r = mid - 1 

        return res
