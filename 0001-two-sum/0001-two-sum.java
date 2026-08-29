class Solution {
    public int[] twoSum(int[] nums, int target) {
          int k=0;
          while(k<=nums.length-1)
          {
          for(int j=k+1;j<nums.length;j++)
          {
            if(nums[k]+nums[j]==target)
            {
               return new int[]{k,j};
            }
          }
            k++;
          }
        return new int[]{};
    }
}