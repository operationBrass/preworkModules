
   
document.getElementById("button1").addEventListener("click", function()
    {
       
        document.getElementById("box").style.height = "250px";

    });

    document.getElementById("button2").addEventListener("click", function()
    {
       
        document.getElementById("box").style.backgroundColor = "lightblue";


    });

    document.getElementById("button3").addEventListener("click", function()
    {
       
        document.getElementById("box").style.opacity = 0.5;
        
    });

// Reset the parameters 
    document.getElementById("button4").addEventListener("click", function()
    {
       
        document.getElementById("box").style.backgroundColor = "orange";
        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.width = "150px";
        document.getElementById("box").style.margin = "25px";
        document.getElementById("box").style.opacity = "1";
        document.body.style.backgroundColor = "white";
        document.getElementById("box").style.visibility = "visible";
    });


    
    document.getElementById("button5").addEventListener("click", function()
    {
       
        document.body.style.backgroundColor = "green";
        
    });    
    
    document.getElementById("button7").addEventListener("click", function()
    {
       
        document.getElementById("box").style.visibility = "hidden";
        
    });

    document.getElementById("button6").addEventListener("click", function()
    {
       
        document.getElementById("box").style.visibility = "visible";
        
    });