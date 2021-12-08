/**
 * @param {number[]} postorder
 * @return {boolean}
 *1. 利用BST特征，将后序遍历数组进行划分
  2. A节点的左子树节点值都小于A节点值，所以当出现比A节点值大的值时，break
  3. 这里会遇到一种情况就是遍历完成也没出现比A节点大的值，这是需要把index设置为l（这里一定要注意！因为到最后都小于A所以假设下一个（l位置的节点本身是不存在，这里就假设一下）
  4. A节点右子树节点都大于A节点，所以从上一步暂停的位置index开始遍历。这一步的前提是index值不是l，index值是l说明A没有右子树
  5. 如果A有右子树就判断有没有比A节点小的值，有的话就返回false
  6. 最后如果遍历左子树右子树都是true，结果才是true
  7. 最开始判断长度，如果只剩下长度小于2的数组说明要么遍历完了要么就只剩一个节点，而这个剩下的节点是经过前一步验证过的，所以直接返回true
 */
var verifyPostorder = function(postorder) {
  // 左边最大值都比root小，右边最小值都比root大
  if(postorder.length < 2) return true
  // 后序遍历根节点是最后一个
  let val = postorder.pop()
  let index = 0
  let l = postorder.length
  for(let i=0; i< l; i++) {
      if(postorder[i] > val) {
          index = i
          break
      }
      // 遍历结束也没有比val大的，则index=l
      // 注意是l，这里l可以看做一个判断条件
      if(i == l-1) index=l
  }
  if(index<l){
      for(let j=index; j<l; j++) {
          if(postorder[j] < val) return false
      }
  }
  // 左子树都是比val小的这是已知的，所以就看右子树
  // 正常应该比val大，若是发现右节点比val小则返回false
  // 注意边界！！！！！
  return verifyPostorder(postorder.slice(0,index)) && verifyPostorder(postorder.slice(index))
};
