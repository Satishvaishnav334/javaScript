#include<iostream>
using namespace std;
class num {
     private:
        int n1,n2,n3,min;
    public: 
        void input(){
            cout << "Enter YOUR NUM1 : ";
            cin >> n1;
            cout << "Enter YOUR NUM2 : ";
            cin >> n2;
            cout << "Enter YOUR NUM3 : ";
            cin >> n3;
        }
         void mini(){
        if(n1>n2){
            if(n2>n3){
                min=n3;
            }
            else{
                min=n2;
            }
        }
        else{
            if(n1>n3){
                min=n3;
            }
            else{
                min=n1;
            }
        }
    }
    void dis(){
        cout<<endl<<"numbwe 1 is = "<<n1;
        cout<<endl<<"numbwe 2 is = "<<n2;
        cout<<endl<<"numbwe 3 is = "<<n3;
        cout<<endl<<"minimum is = "<<min;
    }
};

int main(){
    num s1;
    s1.input();
    s1.mini();
    s1.dis();
    return 0;
}