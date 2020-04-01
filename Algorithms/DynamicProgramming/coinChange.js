/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let j = 1; j <= amount; j++) {
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= j) {
        dp[j] = Math.min(1 + dp[j - coins[i]], dp[j]);
      }
    }
  }

  return dp[amount] == amount + 1 ? -1 : dp[amount];
};

// [1, 2, 5] = 11
