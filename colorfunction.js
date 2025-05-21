function blue()
{ 
    console.log("%c       ","background-color:orange");

   console.log("%c  ","background-color:black");
 }

 function firstsection()
 {
     console.log("%c  ","background-color:purple");
     console.log("%c   ","background-color:white");
    blue();


 }
 firstsection();

 function secondsection()
 {
     console.log("%c  ","background-color:green");
     console.log("%c  ","background-color:darkgrey");
     blue();
     firstsection();
 }
 secondsection();