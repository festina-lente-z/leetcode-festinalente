/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n<2) return n
  let p = 0, q = 1
  while(n>1) {
      let temp = q   
      q = (p + temp) % 1000000007
      p = temp
      n--
  }
  // 要取模！
  return q
};