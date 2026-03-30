"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        intervals.sort(key = lambda x: x.start) 

        heap = [] 

        for interval in intervals: 
            heapq.heappush(heap, interval.end) 

            if heap[0] <= interval.start: 
                heapq.heappop(heap) 

        return len(heap)