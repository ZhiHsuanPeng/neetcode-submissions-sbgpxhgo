class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0: 
            return False 

        count = Counter(hand) 

        for num in sorted(hand): 
            if count[num] == 0: 
                continue 

            for j in range(groupSize): 
                if count[num + j] == 0: 
                    return False 

                count[num + j] -= 1 

        return True