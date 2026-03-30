class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False

        count = Counter(hand)
        hand.sort()

        i = 0

        while i < len(hand):
            # Skip numbers already fully used
            if count[hand[i]] == 0:
                i += 1
                continue

            # Try to build a group starting from hand[i]
            for j in range(groupSize):
                cur = hand[i] + j

                if count[cur] == 0:
                    return False

                count[cur] -= 1

        return True
            