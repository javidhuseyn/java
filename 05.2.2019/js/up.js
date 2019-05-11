var btn=document.getElementById("btn1");
var div=document.getElementById("all");

btn.onclick=function(){
    var newTag=document.createElement("p")
    var input1=document.getElementById("input1").value
    if(input1!=""){
        if(input1.length<8){
            newTag.innerHTML=input1
            div.appendChild(newTag)
    
        }
    
    }
}