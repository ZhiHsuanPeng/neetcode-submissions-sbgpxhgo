class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        count = Counter(hand) 

        hand.sort()
        for card in hand: 
            if count[card] == 0: 
                continue 

            for i in range(card, card + groupSize): 
                if not count[i]: 
                    return False 

                count[i] -= 1 

        return True