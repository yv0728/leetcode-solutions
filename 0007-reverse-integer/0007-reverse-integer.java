class Solution {
    public int reverse(int x) {
        long y=0,f=0;
        if(x<0)
        {
          x*=-1;f=1;
        }
        while(x>0)
        {
          y=y*10+x%10;
          x/=10;
        }
        if(f==1)
        {
          y*=-1;
        }
        if(y>Integer.MAX_VALUE || y<Integer.MIN_VALUE)
        {
          return 0;
        }
        return (int)y;
    }
}