list=input("Enter the word);
i=0;j=len(list)-1
flag=0
while(i<j):
if(list[i]!=list[j]):
flag=1
break
i+=1
j-=1
if(flag==0):
print("is pallindrome")
else:
print("is not pallindrome
")