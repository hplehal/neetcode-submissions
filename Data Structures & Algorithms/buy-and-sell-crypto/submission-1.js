class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //greedy

        let min = prices[0] || 0;
        let value = 0;

        for(let i = 1; i<prices.length; i++) {
            if(prices[i]< min) {
                min = prices[i]
            }    
            value = Math.max(value, prices[i] - min)
        } 
        return value;
    }
}
