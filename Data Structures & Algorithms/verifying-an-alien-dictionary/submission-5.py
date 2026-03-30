class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        orderMap = {c: i for i, c in enumerate(order)}

        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i + 1]

            # prefix case
            if len(w1) > len(w2) and w1.startswith(w2):
                return False

            for j in range(min(len(w1), len(w2))):
                if w1[j] != w2[j]:
                    if orderMap[w1[j]] > orderMap[w2[j]]:
                        return False
                    break

        return True