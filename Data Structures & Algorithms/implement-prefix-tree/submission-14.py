class Node: 
    def __init__(self): 
        self.isEnd = False 
        self.desc = {} 

class PrefixTree:

    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        node = self.root 

        for w in word: 
            if not node.desc.get(w): 
                node.desc[w] = Node() 
            node = node.desc[w] 

        node.isEnd = True

    def search(self, word: str) -> bool:
        node = self.root 

        for w in word: 
            if not node.desc.get(w): 
                return False 
            node = node.desc[w] 

        return node.isEnd

    def startsWith(self, prefix: str) -> bool:
        node = self.root 

        for w in prefix: 
            if not node.desc.get(w): 
                return False 
            node = node.desc[w] 

        return True
        