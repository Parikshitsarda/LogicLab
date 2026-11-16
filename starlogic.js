console.log("printing A ");
for (let i=1;i<=5;i++){
    
    let A = ""; 
    for(let j=1;j<=5;j++){
        
        
     if( (i==1 && (j==2 || j==3||j==4 ))||
        (i==2 && (j==1||j==5))|| 
        (i==3 && (j==1||j==2||j==3||j==4||j==5))||
        (i==4 && (j==1||j==5))||
        (i==5&& (j==1||j==5)))
        { A += "*";
        
    }
    else {A += " "};
}console.log(A); };
console.log("next");
console.log("printing B ");


for (let i=1;i<=5;i++){
    let B = "";
    for(let j=1;j<=5;j++){
        if( (i==1&&(j==1||j==2||j==3||j==4))||
        (i==2&&(j==1||j==5))||
        (i==3&&(j==1||j==2||j==3||j==4))||
        (i==4&&(j==1||j==5))||
        (i==5&&(j==1||j==2||j==3||j==4)))
        
       { B += "*";
     }
     else  {B +=" " };
     }console.log(B);}
     console.log("next");
     console.log("printing C ");

     for(let i=1;i<=5;i++){
        let C = "";
        for(let j=1;j<=5;j++){
            if((i==1&&(j==2||j==3||j==4||j==5))||
            (i==2&&j==1)||
        (i==3&&j==1)||
    (i==4&&j==1)||
(i==5&&(j==2||j==3||j==4||j==5))){
    C += "*";
}
else{C += " ";}
        } console.log(C);
        
     }
     console.log("next");
     console.log("printing D ");

     for (let i=1;i<=5;i++){
    let D = "";
    for(let j=1;j<=5;j++){
    if((i==1&&(j==1||j==2||j==3||j==4))||
(i==2&&(j==1||j==5))||
(i==3&&(j==1||j==5))||
(i==4&&(j==1||j==5))||
(i==5&&(j==1||j==2||j==3||j==4))){
    D += "*";
}else{D += " ";}}
console.log(D);
} 
console.log("next");
console.log("printing E ");

for(let i =1;i<=5;i++){
    let E = "";
    for(let j=1;j<=5;j++){
        if((i==1&&(j==1||j==2||j==3||j==4||j==5))||
        (i==2&&j==1)||
    (i==3&&(j==1||j==2||j==3||j==4||j==5))||
(i==4&&j==1)||
(i==5&&(j==1||j==2||j==3||j==4||j==5))){
    E += "*";
}else{
    E += " ";
}
    }console.log(E);
        
}
console.log("next");
console.log("printing F ");


for(let i =1;i<=5;i++){
    let F = "";
    for(let j=1;j<=5;j++){
        if((i==1&&(j==1||j==2||j==3||j==4||j==5))||
    (i==2&&j==1)||
(i==3&&(j==1||j==2||j==3||j==4||j==5))||
(i==4&&j==1)||
(i==5&&j==1)){
    F += "*";
}else{F += " ";}

    }console.log(F);
    }
    console.log("next");
    console.log("printing G");

    for(let i=1;i<=5;i++){
        let G = "";

        for(let j=1;j<=5;j++){
            if((i==1&&(j==2||j==3||j==4||j==5))||
            (i==2&&j==1)||
        (i==3&&(j==1||j==3||j==4||j==5))||
    (i==4&&(j==1||j==5))||
(i==5&&(j==2||j==3||j==4||j==5))){
    G += "*";
}else{G += " ";}
        }console.log(G);
    }
console.log("next");
console.log("printing H");

for(let i =1;i<=5;i++){
    let H = "";
    for(let j=1;j<=5;j++){
        if((i==1&&(j==1||j==5))||
    (i==2&&(j==1||j==5))||
(i==3&&(j==1||j==2||j==3||j==4||j==5))||
(i==4&&(j==1||j==5))||
(i==5&&(j==1||j==5))){
    H += "*";
}else {H += " ";}
    }console.log(H);
}

console.log("next");
console.log("printing I");

for(let i =1;i<=5;i++){
    let I = "";
        for(let j=1;j<=5;j++){
            if((i==1&&(j==1||j==2||j==3||j==4||j==5))||
        (i==2&&j==3)||
    (i==3&&j==3)||
(i==4&&j==3)||
(i==5&&(j==1||j==2||j==3||j==4||j==5))){
    I += "*";
}else{I +=" ";}

        }console.log(I);
        }
        console.log("next");
        console.log("printing J");

        for(let i=1;i<=5;i++){
            let J = "";
            for(let j=1;j<=5;j++){
                if((i==1&&(j==1||j==2||j==3||j==4||j==5))||
            (i==2&&j==5)||
        (i==3&&j==5)||
    (i==4&&(j==1||j==5))||
(i==5&&(j==2||j==3||j==4||j==5))){
    J += "*";
}else{J += " ";}
            }console.log(J);
        }
         console.log("next");
         console.log("printing K");

         for(let i=1;i<=5;i++){
            let K ="";
            for(let j=1;j<=5;j++){
                if((i==1&&(j==1||j==5))||
            (i==2&&(j==1||j==4))||
        (i==3&&(j==1||j==2))||
    (i==4&&(j==1||j==4))||
(i==5&&(j==1||j==5))){
    K += "*";
}else{K += " ";}
            }console.log(K);
         }
         console.log("next");
         console.log("priniting L");
          
         for(let i=1;i<=5;i++){
            let L ="";
            for(let j=1;j<=5;j++){
                if((i==1&&j==1)||
            (i==2&&j==1)||
        (i==3&&j==1)||
    (i==4&&j==1)||
(i==5&&(j==1||j==2||j==3||j==4||j==5))){
    L +="*";
}else{L += " ";}
            }console.log(L);
         }

         console.log("next");
         console.log("priniting M");

         for(let i=1;i<=5;i++){
            let M ="";
            for(let j=1;j<=5;j++)
            if((i==1&&(j==1||j==5))||
        (i==2&&(j==1||j==3||j==5))||
    (i==3&&(j==1||j==5))||
(i==4&&(j==1||j==5))||
(i==5&&(j==1||j==5))) {
    M += "*";
}else{M += " ";}console.log(M);
            }

            console.log("next");
         console.log("priniting N");


         for(let i=1;i<=5;i++){
            let N ="";
            for(let j=1;j<=9;j++)
            if((i==1&&(j==1||j==9))||
        (i==2&&(j==1||j==3||j==9))||
    (i==3&&(j==1||j==5||j==9))||
(i==4&&(j==1||j==7||j==9))||
(i==5&&(j==1||j==9||j==9))) {
    N += "*";
}else{N += " ";}
console.log(N);
}
console.log("next");
         console.log("priniting O");


          for(let i=1;i<=5;i++){
            let O ="";
            for(let j=1;j<=5;j++)
            if((i==1&&(j==2||j==3||j==4))||
        (i==2&&(j==1||j==5))||
    (i==3&&(j==1||j==5))||
(i==4&&(j==1||j==5))||
(i==5&&(j==2||j==3||j==4))){
    O += "*";
}else{O += " ";}console.log(O);
            }

            console.log("next");
         console.log("priniting P");

         for(let i=1;i<=5;i++){
            let P ="";
            for(let j=1;j<=5;j++)
            if((i==1&&(j==1||j==2||j==3||j==4))||
        (i==2&&(j==1||j==5))||
    (i==3&&(j==1||j==2||j==3||j==4))||
(i==4&&(j==1))||
(i==5&&(j==1))) {
    P += "*";
}else{P += " ";}console.log(P);
            }

            console.log("next");
         console.log("priniting Q");


         for(let i =1;i<=5;i++){
    let Q = "";
    for(let j=1;j<=5;j++){
        if((i==1&&(j==2||j==3||j==4))||
    (i==2&&(j==1||j==5))||
(i==3&&(j==1||j==3||j==5))||
(i==4&&(j==2||j==3||j==4||j==5))){
   
    Q += "*";
}else{Q += " ";}

    }console.log(Q);
    }
    console.log("next");
    console.log("printing R"); 

     for(let i=1;i<=5;i++){
            let R ="";
            for(let j=1;j<=5;j++)
            if((i==1&&(j==1||j==2||j==3||j==4))||
        (i==2&&(j==1||j==5))||
    (i==3&&(j==1||j==2||j==3||j==4))||
(i==4&&(j==1||j==3))||
(i==5&&(j==1||j==5))) {
    R += "*";
}else{R += " ";}console.log(R);
            }

        console.log("next");
        console.log("printing S");

        for (let i=1;i<=5;i++){
            let S = "";
            for (let j=1;j<=5;j++)
                if((i==1&&(j==1||j==2||j==3||j==4||j==5))||
        (i==2&&j==1)||
    (i==3&&(j==1||j==2||j==3||j==4||j==5))||
(i==4&&j==5)||
(i==5&&(j==1||j==2||j==3||j==4||j==5))){
    S += "*";
}else{
    S +=" ";
}console.log(S);
        }

        console.log("next");
        console.log("printing T");

        for (let i=1;i<=6;i++){
            let T = "";
            for (let j=1;j<=6;j++)
                if((i==1&&(j==1||j==2||j==3||j==4||j==5||j==6))||
        (i==2&&j==3)||
    (i==3&&j==3)||
(i==4&&j==3)||
(i==5&&j==3)||
(i==6&&j==3)){
    T +="*";
}else{
    T += " ";
}console.log(T);
            }

            console.log("next");
            console.log("printing U");

            for (let i=1;i<=5;i++){
            let U = "";
            for (let j=1;j<=5;j++)
                if((i==1&&(j==5||j==1))||
        (i==2&&(j==5||j==1))||
    (i==3&&(j==5||j==1))||
(i==4&&(j==5||j==1))||
(i==5&&(j==2||j==3||j==4))){
U +="*";
}else{
    U += " ";
}console.log(U);
            }

            console.log("next");
            console.log("printing V");

            for (let i=1;i<=6;i++){
            let V = "";
                for (let j=1;j<=6;j++)
                    if((i==1&&(j==1||j==5))||
            (i==2&&(j==2||j==4))||
        (i==3&&j==3)){
            V +="*";
        }else{
            V += " ";
        }console.log(V);
                    

                }

                console.log("next");
            console.log("printing W")

            for (let i=1;i<=6;i++){
            let W = "";
                    for (let j=1;j<=6;j++)
                        if((i==1&&(j==1||j==6))||
                (i==2&&(j==1||j==6))||
            (i==3&&(j==1||j==6))||
        (i==4&&(j==1||j==6))||
    (i==5&&(j==1||j==3||j==6))||
(i==6&&(j==1||j==6))){
    W += "*";
}else{W += " ";

} console.log(W);

                    }

                    console.log("next");
            console.log("printing X")

            for (let i=1;i<=6;i++){
            let X = "";
                    for (let j=1;j<=6;j++)
                        if((i==1&&(j==1||j==6))||
                (i==2&&(j==2||j==5))||
            (i==3&&j==3)||
        (i==4&&(j==2||j==5))||
    (i==5&&(j==1||j==6))){
        X += "*";
    }else{
        X += " ";
    }console.log(X);
                    }

                    console.log("next");
            console.log("printing Y")
            for (let i=1;i<=6;i++){
            let Y = "";
                    for (let j=1;j<=6;j++)
                        if((i==1&&(j==1||j==6))||
                (i==2&&(j==2||j==5))||
            (i==3&&j==3)||
        (i==4&&(j==3))||
    (i==5&&(j==3))||
    (i==6&&j==3)){
    
        Y += "*";
    }else{
        Y += " ";
    }console.log(Y);
                    }
                    console.log("next");
            console.log("printing Z");
             for(let i=1;i<=5;i++){
            let Z ="";
            for(let j=1;j<=5;j++)
            if((i==1&&(j==1||j==2||j==3||j==4||j==5))||
        (i==2&&(j==4))||
    (i==3&&(j==3))||
(i==4&&(j==2))||
(i==5&&(j==1||j==2||j==3||j==4||j==5))) {
    Z += "*";
}else{Z += " ";}console.log(Z);
            }


            











       
              

           












 