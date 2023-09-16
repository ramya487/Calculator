var str1="";
let result="";
var his_str="";
var his_res="";
var his_string="";

function clearr(){
    str1 = "";
    result = "";
    document.getElementById("content").innerHTML=str1;
}
function dell(){
    str1 = document.getElementById("content").innerHTML;
    str1 = str1.slice(0,str1.length-1);
    document.getElementById("content").innerHTML=str1;
}
function onclic(){
    str1= document.getElementById("content").innerHTML;
    his_str = str1;
    try{
    result = eval(str1);
    if (result == "Infinity"){
        result="Error";
        document.getElementById("content").innerHTML=result;
        str1="";
    }
    else{
    document.getElementById("content").innerHTML=result;
    }
    }
    catch{
        result="Error";
        document.getElementById("content").innerHTML=result;
        str1="";
    }
    his_res = result;
    his_string = his_string+"<br>"+his_str+"="+his_res;
    document.getElementById("textcontent").innerHTML=his_string;
}
function fn(x){
    if (result == "Error"){
        document.getElementById("content").innerHTML="";
        result = null;
    }
    str1 = document.getElementById("content").innerHTML;
    str1 = str1+document.getElementById(x).innerHTML;
    document.getElementById("content").innerHTML=str1;
}
function history(){
    document.getElementById("history").addEventListener("click",()=>{
        document.getElementById("sidebar").classList.toggle("hidden");
        document.getElementsByClassName("flex-container")[0].classList.toggle("expanded");
    });
}
function clearHistory(){
    document.getElementById("textcontent").innerHTML="";
    his_res="";
    his_str="";
    his_string="";
}