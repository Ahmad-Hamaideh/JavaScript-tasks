// var fname= document.getElementById("ffname");

// fname.onchange = function()
// {
// localStorage.setItem("fname",fname.value);
// }

// var lname=document.getElementById("lname");

// lname.onchange = function()
// {
//    localStorage.setItem("lname",lname.value);
// }

// var loc=document.getElementById("major");

// loc.onchange = function()
// {
//    localStorage.setItem("major",loc.value);
// }
// var brief=document.getElementById("brf")
//  brief.onchange=function(){
//     localStorage.setItem("brf",brief.value)
//  }

// var ch =document.getElementById("lgn")

// ch.onchange=function(){
//     localStorage.setItem("lgn",ch.value)
// }


var fffname= document.getElementById("ffname");
var bt = document.getElementById("btn");
var loc=document.getElementById("major");
var age=document.getElementById("lname");
var br=document.getElementById("brf");
// var ok=document.getElementById("male");
// var ok1=document.getElementById("female");
var boxes = document.getElementsByName('ok');

bt.onclick=function(){
    localStorage.setItem("major",loc.value )
    localStorage.setItem("ffname",fffname.value)
    localStorage.setItem("name2",age.value)
    localStorage.setItem("brf",br.value)
let boxx;
let gn = document.getElementsByName('gen');

    
    let oppo = document.querySelectorAll('input[name="ok"]:checked');
    let values = [];
oppo.forEach((checkbox) => {
values.push(checkbox.value);
localStorage.setItem('ok',values);
                });

for(let i = 0; i <= gn.length; i++) {
    if(gn[i].checked){
        boxx=gn[i].value;
    localStorage.setItem("gen" ,boxx);	
    }
}




}

function myfn(){
document.getElementById("firstnamecard").innerHTML="My Name Is "+localStorage.getItem("ffname");
document.getElementById("youragecard").innerHTML="Im"+localStorage.getItem("name2")+"Years Old";
document.getElementById("major").innerHTML="Im a "+localStorage.getItem("gen");
document.getElementById("landue").innerHTML="My Prefferd Languages are "+localStorage.getItem("ok");
document.getElementById("briefcard").innerHTML= localStorage.getItem("brf");
document.getElementById("gendercard").innerHTML="I studied "+localStorage.getItem("major");
document.getElementById("lol").style.backgroundColor="blue";
document.getElementById("lol").style.padding="100px";
document.getElementById("lol").style.width="200px";
document.getElementById("lol").style.margin="100px";





}




 






















// }

// localStorage.setItem("male",ok.value)
    // localStorage.setItem("female",ok1.value)












// fname.value=localStorage.getItem("fname");

// lname.value=localStorage.getItem("lname");

// loc.value=localStorage.getItem("location");