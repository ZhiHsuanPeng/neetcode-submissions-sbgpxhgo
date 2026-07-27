class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        cnt = Counter(hand) 

        for h in sorted(hand): 
            if cnt[h] == 0: 
                continue 

            for i in range(groupSize): 
                if cnt[h + i] == 0: 
                    return False 

                cnt[h + i] -= 1 

        return True