class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anag = {};
        for(let item of strs) {
            let sortedWord = (item.split('').sort().join(''))
            // console.log(strs[index]);
            if(!anag[sortedWord]) {
                anag[sortedWord] = []
            }
            anag[sortedWord].push(item);
        }
        return Object.values(anag);
    }
}
