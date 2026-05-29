class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unq = new Set(nums)
        console.log(nums.length);
        return(!(unq.size == nums.length))
    }
}
