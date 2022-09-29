let totals=document.getElementById('total'),
    per=document.getElementById('percentage'),
    names=document.getElementById('name'),
    Tamil=document.getElementById('tamil'),
    Eng=document.getElementById('english'),
    Math=document.getElementById('maths'),
    Science=document.getElementById('science'),
    Social=document.getElementById('social'),
    Button=document.getElementById('btn');
    

   

   let calculate=function(){
       if(names!==""){
           let table=document.getElementById('table');

           let lengthEle=table.insertRow(table.length);
           
           let cell1=lengthEle.insertCell(0);
           let cell2=lengthEle.insertCell(1);
           let cell3=lengthEle.insertCell(2);
           let cell4=lengthEle.insertCell(3);
           let cell5=lengthEle.insertCell(4);
           let cell6=lengthEle.insertCell(5);
           let cell7=lengthEle.insertCell(6);
           let cell8=lengthEle.insertCell(7);

           cell1.innerText=names.value;
           cell2.innerText=Tamil.value;
           cell3.innerText=Eng.value;
           cell4.innerText=Math.value;
           cell5.innerText=Science.value;
           cell6.innerText=Social.value;

           let totalEle=parseInt(Tamil.value)+parseInt(Eng.value)+parseInt(Math.value)+parseInt(Science.value)+parseInt(Social.value);
           
           cell7.innerText=totalEle;
           let easy=totalEle/5;
           cell8.innerText=easy;

           names.value="";
           Tamil.value="";
           Eng.value="";
           Math.value="";
           Science.value="";
           Social.value="";
           totals.value="";
           per.value="";        
       }
   }
   Button.addEventListener("click",function(){
    calculate();
})
   