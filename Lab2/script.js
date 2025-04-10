function register(){
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color=document.getElementById("color").value;
    setCookie("name",name,3);
    setCookie("age",age,3);
    setCookie("gender",gender,3);
    setCookie("color",color,3);
    setCookie("visits",0,3);

    window.location.href='profilepage.html';
}

// console.log(navigator.cookieEnabled);
// document.cookie="name=Ahmed; expires= Sun, 13 Apric 2025 12:00:00 UTC; path=/";
// console.log(document.cookie);

function setCookie(name,value,days){
const date=new Date();
date.setTime(date.getTime()+ (days*24*60*60*1000));
let expires= "expires =" +date.toUTCString();
document.cookie=`${name}=${value}; ${expires}; path=/ `

}
function getCookie(name){
    const cDecoded=decodeURIComponent(document.cookie);
    const cArray=cDecoded.split("; ");
    let result=null;
cArray.forEach(element=>{
    if(element.indexOf(name)==0){
        result =element.substring(name.length + 1);
    }
})
return result;
}
function deleteCookie(name){
setCookie(name,null,null);
}
function getProfileInfo() {
    const name = getCookie("name");
    const gender = getCookie("gender");
    const color = getCookie("color");
    let visits = parseInt(getCookie("visits")) || 0;
    
    // Increment visit count and update cookie
    visits++;
    setCookie("visits", visits, 3);
    
    const imgSrc = gender === "male" ? "male.jpg" : "female.jpg";
    const greetingHTML = `
        <img src="${imgSrc}" width="150"><br>
        <span style="color:${color}; font-size:18px;">
            Welcome <strong>${name}</strong>, you have visited this site <strong>${visits}</strong> times!
        </span>
    `; 
    document.getElementById("greeting").innerHTML = greetingHTML;
}