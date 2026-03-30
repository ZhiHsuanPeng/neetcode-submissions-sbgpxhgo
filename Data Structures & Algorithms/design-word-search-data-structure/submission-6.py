class Node: 
    def __init__(self): 
        self.desc = dict() 
        self.isEnd = False


class WordDictionary:

    def __init__(self):
        self.root = Node() 

    def addWord(self, word: str) -> None:
        node = self.root 

        for w in word: 
            if not node.desc.get(w): 
                node.desc[w] = Node() 
            node = node.desc.get(w) 

        node.isEnd = True 


    def search(self, word: str) -> bool:
        return self.dfs(0, word, self.root)

    def dfs(self, start, word, node):   
        for i in range(start, len(word)): 
            cur = word[i] 

            if cur == '.': 
                for child in node.desc.values():
                    if self.dfs(i + 1, word, child): 
                        return True 
                return False 
            else: 
                if not node.desc.get(cur): 
                    return False  

                node = node.desc.get(cur)

        return node.isEnd