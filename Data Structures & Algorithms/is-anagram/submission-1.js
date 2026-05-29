class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // let sSort = s.split('').sort().join();
        // let tSort = t.split('').sort().join();
        
        // return sSort === tSort;

        if(t.length !== s.length) {
            return false;
        }
        
        const sCount = {};
        const tCount = {};

        for(let i = 0; i < s.length; i++) {
            sCount[s[i]] = (sCount[s[i]] || 0) + 1;
            tCount[t[i]] = (tCount[t[i]] || 0) + 1;
        }
        for(let key in sCount) {
            if(sCount[key] !== tCount[key]){
                return false;
            }
        }
        return true;
    }
}
