class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks) 
        max_freq = max(count.values()) 
        max_count = 0 
         
        for count in count.values(): 
            if count == max_freq: 
                max_count += 1

        return max(len(tasks), ( max_freq - 1 ) * ( n + 1 ) + max_count)