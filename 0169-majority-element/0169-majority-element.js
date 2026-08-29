/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ch =new Map();
    for (let c of nums)
    {
      if(ch.has(c))
      {
        ch.set(c,ch.get(c)+1);
      }
      else
      {
        ch.set(c,1);
      }
    }
    for (let i of ch.keys())
    {
      if(ch.get(i)>(nums.length/2))
      {
        return i;
      }
    }
};