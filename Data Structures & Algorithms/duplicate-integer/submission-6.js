class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unq = new Set(nums)
        return(unq.size < nums.length)
    }
}
