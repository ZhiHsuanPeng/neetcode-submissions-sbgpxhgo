class Twitter:

    def __init__(self):
        self.post = defaultdict(list)
        self.followList = defaultdict(set) 
        self.count = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.post[userId].append((self.count, tweetId)) 
        self.count -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        res = [] 
        heap = [] 

        self.followList[userId].add(userId) 

        for followeeId in self.followList[userId]:  
            if self.post[followeeId]: 
                lastIdx = len(self.post[followeeId]) - 1 
                count, tweetId = self.post[followeeId][lastIdx] 
                heapq.heappush(heap, (count, followeeId, lastIdx)) 

        while heap and len(res) < 10: 
            _, followeeId, index = heapq.heappop(heap)  
            _, curTweetId = self.post[followeeId][index]
            res.append(curTweetId) 

            if index - 1 >= 0:  
                count, tweetId = self.post[followeeId][index - 1]
                heapq.heappush(heap, (count, followeeId, index - 1)) 
                
        return res 

    def follow(self, followerId: int, followeeId: int) -> None:
        self.followList[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.followList[followerId].discard(followeeId)
