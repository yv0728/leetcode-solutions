/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let a="qwertyuiop";
    let b="asdfghjkl";
    let c="zxcvbnm";
    let r="",i=0,j=0;
    let res=[];
    for(i=0;i<words.length;i++)
    {
       let y=words[i].toLowerCase();
       r="";
       if(a.includes(y[0]))
       {
         r=a;
       }
       else if(b.includes(y[0]))
       {
        r=b;
       }
       else
       {
        r=c;
       }
       for(j=0;j<y.length;j++)
       {
         if(!r.includes(y[j]))
         {
            break;
         }
       }
       if(j==y.length)
       {
         res.push(words[i]);
       }
    }
    return res;
};