class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) { 
       let positionAndSpeed = position.map((val, index) => {
        return [val, speed[index]]
       }).sort((a, b) => b[0] - a[0])  
        
        let time = positionAndSpeed.map((val) => {
            const [position, speed] = val 

            return (target - position) / speed
        }) 
         
        let stack = []  
        for (const t of time) {
            if (stack.length > 0) {
                if (!(t > stack[stack.length - 1])) {
                    continue
                }
            } 
            stack.push(t) 
        } 

        return stack.length

    }
}
