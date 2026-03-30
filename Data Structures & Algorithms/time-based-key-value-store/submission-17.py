class TimeMap:

    def __init__(self): 
        # key: [ (val, timestamp) ... ]
        self.time_map = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.time_map[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        time_list = self.time_map[key] 

        if len(time_list) == 0: 
            return '' 

        l = 0 
        r = len(time_list) - 1 

        while l <= r: 
            mid = (l + r) // 2  
            mid_val, mid_time = time_list[mid]
            
            if mid_time == timestamp: 
                return mid_val
            elif mid_time < timestamp: 
                l = mid + 1
            else: 
                r = mid - 1 

        return time_list[r][0] if r >= 0 else ''
