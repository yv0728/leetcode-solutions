/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let ch=new Map();
    for (let i of nums)
    {
       if(ch.has(i))
       {
         return true;
       }
       else
       {
         ch.set(i,1);
       }
    }
    return false;
};