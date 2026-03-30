class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) { 
        let result = new Array(t.length).fill(0) 
        let stack = [] 

        for (let i = 0; i < t.length; i ++) {
            let cur = t[i] 

            while(stack.length && stack[stack.length - 1][0] < cur) {
                const [temp, index] = stack.pop() 

                result[index] = i - index
            } 

            stack.push([cur, i])
        } 
        return result
    }
}
