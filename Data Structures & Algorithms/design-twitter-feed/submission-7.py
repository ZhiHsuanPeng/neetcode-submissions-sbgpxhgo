class Twitter:

    def __init__(self): 
        # postList, userId => tweetId
        self.post = defaultdict(list) 
        # followeeList, userId => userId
        self.list = defaultdict(set) 
        self.cnt = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.post[userId].append([self.cnt, tweetId])
        self.cnt -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        res = [] 
        heap = [] 

        self.list[userId].add(userId) 

        for followeeId in self.list[userId]: 
            posts = self.post[followeeId] 
            if posts: 
                lastIdx = len(posts) - 1 
                cnt, _ = posts[lastIdx] 
                heapq.heappush(heap, (cnt, followeeId, lastIdx)) 

        while heap and len(res) < 10: 
            cnt, followeeId, index = heapq.heappop(heap) 
            res.append(self.post[followeeId][index][1]) 

            if index - 1 >= 0:  
                cnt, _ = self.post[followeeId][index - 1]
                heapq.heappush(heap, (cnt, followeeId, index - 1)) 

        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.list[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.list[followerId].discard(followeeId)
