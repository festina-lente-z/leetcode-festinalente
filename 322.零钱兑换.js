/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = Array(amount+1).fill(amount+1)
  dp[0] = 0
  // 外层for循环在遍历所有状态的所有取值
  for(let i=0; i<dp.length; i++) {
    for(let coin of coins) {
      if(i-coin>=0){
        dp[i] = Math.min(dp[i], 1+dp[i-coin])
      }
    }
  }
  return (dp[amount] == amount + 1) ? -1 : dp[amount]
};
// @lc code=end

