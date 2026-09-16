class Solution {
    public boolean isSubsequence(String s, String t) {
     String a="";   
     int l=0,m=0,n=0,x=0;
		if(s.equals(""))
		{
		  return true;  
		}
		else if(s.length()==1)
		{
		  if(s.equals(t) || t.contains(s))
		  {
		    return true;    
		  }
		  else
		  {
		    return false;    
		  }
		}
		else
		{
		  for(int i=0;i<s.length();i++)
		  {
		    for(int j=0;j<t.length();j++)
		    {
		      if(!a.contains(j+""))
		      {
		       if(s.charAt(i)==t.charAt(j) && j>=x)
		       {
		        a+=j;
                x=j;
		        a+=" ";
                break;
		       }
		      }
		    }
		  }
		String b[]=a.split(" ");
		for(l=0;l<b.length-1;l++)
		{
		   m=0;n=0;
		   m=Integer.valueOf(b[l]);
		   n=Integer.valueOf(b[l+1]);
		   if(m>n)
		   {
		     break; 
		   }
		}
		if(l==b.length-1 && b.length==s.length())
		{
		  return true;  
		}
		else
		{
		  return false;  
		}
		}
     }
}