class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let result = new Array(temperatures.length).fill(0);
        for (let i = 0; i < result.length; i ++) {
            let cur = temperatures[i]
            while(stack.length > 0 && stack[stack.length - 1][0] < cur) {
                // found a high
                let [temp, index] = stack.pop();
                let diff = i - index;
                result[index] = diff
            }
            stack.push([cur, i])
        }

        return result
    }
}
