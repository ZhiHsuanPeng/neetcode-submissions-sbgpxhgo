class TimeMap:

    def __init__(self):
        self.pairs = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.pairs[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        pairs = self.pairs[key]

        l = 0 
        r = len(pairs) - 1 
        res = '' 

        while l <= r: 
            mid = (l + r) // 2 
            val, times = pairs[mid] 

            if times <= timestamp: 
                res = val
                l = mid + 1 
            else: 
                r = mid - 1 

        return res
