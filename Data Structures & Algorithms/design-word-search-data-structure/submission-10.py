class Node: 
    def __init__(self): 
        self.desc = {} 
        self.isEnd = False

class WordDictionary:
    def __init__(self): 
        self.root = Node()
        
    def addWord(self, word: str) -> None:
        node = self.root 

        for w in word: 
            if w not in node.desc: 
                node.desc[w] = Node() 

            node = node.desc[w] 

        node.isEnd = True

    def search(self, word: str) -> bool: 

        def dfs(i, curNode): 
            if i == len(word): 
                return curNode.isEnd 

            cur = word[i] 

            if cur == '.': 
                for node in curNode.desc.values(): 
                    if dfs(i + 1, node): 
                        return True 

                return False 
            else: 
                if cur not in curNode.desc: 
                    return False 

                return dfs(i + 1, curNode.desc[cur]) 

        return dfs(0, self.root)
        
