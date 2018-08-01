

function reverse1()
{
var rev,num,b,temp=0;

num=Number(document.getElementById("input1").value);

no=num;
while(no>0)
{
rev=no%10;
no=parseInt(no/10);
temp=temp*10+rev;
}
document.getElementById("id1").innerHTML=temp;
}
