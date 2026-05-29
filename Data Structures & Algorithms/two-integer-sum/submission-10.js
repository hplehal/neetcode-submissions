class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(let i = 0; i<nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++) {
        //         let sum = nums[i] + nums[j];
        //         if(sum == target){
        //             return([i,j])
        //         }
        //     }
        // }
        // return false;

        // Two Pass HashMap
        // const valObj = {}
        // for(let i = 0; i < nums.length; i++) {
        //     valObj[nums[i]] = i
           
        // }

        // for(let i = 0; i<nums.length; i++) {
        //     let diff = target - nums[i]
        //     if(valObj[diff] !== i && valObj[diff] !== undefined) {
        //         return [i, valObj[diff]]
        //     }
        // }
        // return [];


        // const valObj = {}

        // for(let i = 0; i<nums.length; i++) {
        //     let diff = target - nums[i]
        //     if(valObj[diff] !== undefined) {
        //         return [i, valObj[diff]]
        //     }
        //     valObj[nums[i]] = i
        // }
        // return [];



        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i]
            if(map.has(diff)) {
                return [map.get(diff), i]
            }
            map.set(nums[i],i)
        }
        return []
    }
}
