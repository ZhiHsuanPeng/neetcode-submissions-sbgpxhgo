class Twitter:

    def __init__(self):
        self.tweets = defaultdict(list)
        self.follower = defaultdict(set) 
        self.cnt = 0

    def postTweet(self, userId: int, tweetId: int) -> None: 
        self.cnt -= 1
        self.tweets[userId].append((self.cnt, tweetId))

    def getNewsFeed(self, userId: int) -> List[int]:
        res = [] 
        heap = [] 

        self.follower[userId].add(userId) 

        for followerId in self.follower[userId]: 
            tweets = self.tweets[followerId]   
            if tweets: 
                lastIdx = len(tweets) - 1
                time, tweetId = tweets[-1]  
                heapq.heappush(heap, (time, tweetId, followerId, lastIdx)) 

        
        while heap and len(res) < 10: 
            _, tweetId, userId, index = heapq.heappop(heap) 
            res.append(tweetId) 
            if index - 1 >= 0:  
                time, tweetId = self.tweets[userId][index - 1]
                heapq.heappush(heap, (time, tweetId, userId, index - 1)) 

        return res 



    def follow(self, followerId: int, followeeId: int) -> None:
        self.follower[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.follower[followerId].discard(followeeId)
