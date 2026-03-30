class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let res = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i ++) {
            let cur =  temperatures[i]
            while(stack.length > 0 && cur > stack[stack.length - 1][0]) {
                let temp = stack.pop();
                let diff = i - temp[1];
                res[temp[1]] = diff
            }

            stack.push([cur, i])
        }

        return res
    }
}
