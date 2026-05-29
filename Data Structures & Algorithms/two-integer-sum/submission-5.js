class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // const obj = {};

        // for(let i =0; i< nums.length; i++) {
        //     const diff = target - nums[i] 
        //     if(obj.hasOwnProperty(diff)) {
        //        return [i,obj[diff]];
        //     } else {
        //         obj[nums[i]] = i;
        //     }
        // }

        // const map = new Map();

        // for(let i = 0; i < nums.length; i++) {
        //     if(map.has(target - nums[i])){
        //         return [i, map.get(target - nums[i])]
        //     }
        //     map.set(nums[i],i)
        // }

        const obj = {}

        for(let i = 0; i < nums.length; i++){
            if(obj.hasOwnProperty(target - nums[i])) {
                return [i, obj[target - nums[i]]]
            } else {
                obj[nums[i]] = i;
            }
        }
    }
}
