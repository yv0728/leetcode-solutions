/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
   let r=0,e=2*k,t="";
   while(r<s.length)
   {
    let f=s.slice(r,e);
    f=f.slice(0,k).split("").reverse().join("")+f.slice(k);
    t+=f;
    r=e;e+=2*k;
   }
   return t;
};