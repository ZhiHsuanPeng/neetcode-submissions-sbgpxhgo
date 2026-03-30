class Node: 
    def __init__(self): 
        self.desc = {} 
        self.isEnd = False

class PrefixTree:

    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        node = self.root 

        for w in word: 
            if w not in node.desc: 
                node.desc[w] = Node() 
            node = node.desc[w] 

        node.isEnd = True    

    def search(self, word: str) -> bool:
        node = self.root 

        for w in word: 
            if w not in node.desc: 
                return False 

            node = node.desc[w] 

        return node.isEnd

    def startsWith(self, prefix: str) -> bool:
        node = self.root 

        for w in prefix: 
            if w not in node.desc: 
                return False 

            node = node.desc[w] 
        
        return True
        