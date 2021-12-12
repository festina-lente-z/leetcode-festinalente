/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  // 斐波那契函数
  if(n == 0) return 1
  if(n <= 2) return n

  let p = 1, q = 2
  while(n > 2) {
      const temp = q
      q = (p + temp) % 1000000007
      p = temp
      n--
  }
  return q
};