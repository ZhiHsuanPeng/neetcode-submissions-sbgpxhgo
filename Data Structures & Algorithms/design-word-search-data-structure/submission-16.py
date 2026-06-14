class Node: 
    def __init__(self): 
        self.isEnd = False 
        self.desc = {}

class WordDictionary:

    def __init__(self):
        self.root = Node() 

    def addWord(self, word: str) -> None:
        node = self.root 

        for c in word: 
            if c not in node.desc: 
                node.desc[c] = Node() 
                
            node = node.desc[c] 

        node.isEnd = True

    def search(self, word: str) -> bool:
        
        def dfs(curNode, i): 
            if i == len(word): 
                return curNode.isEnd 

            curWord = word[i] 

            if curWord == ".": 
                for node in curNode.desc.values(): 
                    if dfs(node, i + 1): 
                        return True 
                return False 
            else: 
                if curWord not in curNode.desc: 
                    return False 

                return dfs(curNode.desc[curWord], i + 1) 

        return dfs(self.root, 0)    