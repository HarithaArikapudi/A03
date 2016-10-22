
       
        function setTable(){                      
            localStorage.setItem("incr", "10");       
        }
        
      
       function clickCounter(){
 
       
        if(typeof(Storage) !== "undefined") {
        
         if (localStorage.clickcount) {
             if(Number(localStorage.incr)>1)
        {
            localStorage.incr=Number(localStorage.incr)-1;
            
        document.getElementById("display").innerHTML = "Table Number "+localStorage.incr+" Has Been Reserved For You";
       
        } 
        else if(Number(localStorage.incr)<=1){
            
            alert("There are no tables available..We are sorry");
        }  
        } else {
            localStorage.clickcount = 1;
            
        }
        }
    
      }     

// $("#display").hover(function(){
// $(this).css("background-color", "yellow");
// });

window.onload = function() {
   setTable();
  document.getElementById("submit").onclick() = clickCounter;
};