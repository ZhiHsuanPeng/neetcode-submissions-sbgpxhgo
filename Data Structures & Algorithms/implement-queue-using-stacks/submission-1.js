class MyQueue {
    constructor() { 
        this.s1 = [] 
        this.s2 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) { 
        this.s1.push(x)
    }

    /**
     * @return {number}
     */
    pop() { 
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        } 

        const result = this.s2.pop() 

        while(this.s2.length > 0) {
            this.s1.push(this.s2.pop())
        }  

        return result
    }

    /**
     * @return {number}
     */
    peek() {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        } 

        const result = this.s2[this.s2.length - 1]

        while(this.s2.length > 0) {
            this.s1.push(this.s2.pop())
        }  

        return result
    }

    /**
     * @return {boolean}
     */
    empty() { 
        return this.s1.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
