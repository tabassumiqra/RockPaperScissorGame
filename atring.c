#include<stdio.h>
#include<string.h>
#include <string>
int main(){
    string s='({})()';
    int x=0,y=0,z=0;
    string m ='';
    while(*s!='\0'){
        if(*s=='('){
            x++;
            m='(';
        }
         if(*s=='{'){
            y++;
            m='{';
        }
         if(*s=='['){
            z++;
            m='[';
        }
         if(*s==')'&& m=='('){
            x--;
        }
         if(*s=='('&& m=='{'){
            y--;
        }
         if(*s=='('&& m=='['){
            z--;
        }
        s++;
    }
     if(x==0&&y==0&&z==0){
       printf("yes");
    }
    printf("no");
    return 0;
}
