/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let l=1;
    while(l<=Math.floor(s.length/2))
    {
      if(s.length%l==0)
      {
        let t=s.slice(0,l),g="";
        console.log(t);
        let m=Math.floor(s.length/t.length),r=0;
        while(r<m)
        {
           g+=t;r+=1;
        }
        if(g==s)
        {
            return true;
        }
      }
      l+=1;
    }
    return false;
};