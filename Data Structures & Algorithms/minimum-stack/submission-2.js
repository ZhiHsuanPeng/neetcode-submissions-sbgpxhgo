class MinStack { 
    constructor() { 
        this.array = []
        this.minArr = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) { 
        this.array.push(val) 
        if (this.minArr.length > 0) {
            let lastSmallest = this.minArr[this.minArr.length - 1] 
            let min = Math.min(lastSmallest, val) 
            this.minArr.push(min)
        } else {
            this.minArr.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() { 
        this.array.pop() 
        this.minArr.pop()
    }

    /**
     * @return {number}
     */
    top() { 
        return this.array[this.array.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() { 

        return this.minArr[this.minArr.length - 1]
    }
}
