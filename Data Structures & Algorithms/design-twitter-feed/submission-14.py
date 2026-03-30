class Twitter:

    def __init__(self):
        self.f = defaultdict(set) 
        self.t = defaultdict(list) 
        self.time = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.t[userId].append((tweetId, self.time)) 
        self.time -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        minHeap = [] 
        userSet = self.f[userId]  
        userSet.add(userId)
        
        for user in userSet:
            tweets = self.t[user]  
            lastIdx = len(tweets) - 1 
            if lastIdx >= 0: 
                lastId, time = tweets[lastIdx] 
                heapq.heappush(minHeap, (time, user, lastIdx, lastId)) 

        res = []
        while minHeap and len(res) < 10: 
            time, user, index, tweetId = heapq.heappop(minHeap) 

            res.append(tweetId) 
            if index > 0:  
                nextTweetId, nextTime = self.t[user][index - 1]
                heapq.heappush(minHeap, (nextTime, user, index - 1, nextTweetId))

        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.f[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.f[followerId]: 
            self.f[followerId].discard(followeeId)
