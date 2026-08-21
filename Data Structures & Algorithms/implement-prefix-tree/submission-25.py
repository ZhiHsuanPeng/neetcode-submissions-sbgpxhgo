class Node: 
    def __init__(self): 
        self.isEnd = False 
        self.desc = {}

class PrefixTree:

    def __init__(self):
        self.root = Node() 


    def insert(self, word: str) -> None:
        node = self.root 

        for c in word: 
            if c not in node.desc:  
                node.desc[c] = Node()
            
            node = node.desc[c] 

        node.isEnd = True

    def search(self, word: str) -> bool:
        node = self.root 

        for c in word: 
            if c not in node.desc: 
                return False 

            node = node.desc[c] 

        return node.isEnd

    def startsWith(self, prefix: str) -> bool:
        node = self.root 

        for c in prefix: 
            if c not in node.desc: 
                return False 

            node = node.desc[c] 

        return True
        