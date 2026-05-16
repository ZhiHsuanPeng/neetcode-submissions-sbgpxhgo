class Twitter:

    def __init__(self):
        self.f = defaultdict(set) 
        self.t = defaultdict(list)  
        self.time = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.t[userId].append((tweetId, self.time)) 
        self.time += 1

    def getNewsFeed(self, userId: int) -> List[int]:
        heap = [] 
        res = [] 

        self.f[userId].add(userId)

        for f in self.f[userId]:   
            if len(self.t[f]) == 0:  
                continue 

            lastTweetId, time = self.t[f][-1] 
            index = len(self.t[f]) - 1
            heapq.heappush(heap, (-time, f, lastTweetId, index)) 

        while heap and len(res) < 10:  

            _, f, recentTweetId, index = heapq.heappop(heap)  
            res.append(recentTweetId)    

            if index > 0:
                tweetId, time = self.t[f][index - 1] 
                heapq.heappush(heap, (-time, f, tweetId, index -1)) 

        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.f[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.f[followerId]: 
            self.f[followerId].remove(followeeId)
