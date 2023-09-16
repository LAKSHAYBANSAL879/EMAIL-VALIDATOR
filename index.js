const btn=document.getElementById("sumbit")
const results=document.querySelector(".rescont");


let result={ 
    "tag": "",
    "free": true,
    "role": false,
    "user": "l7036403",
    "email": "l7036403@gmail.com",
  
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}


btn.addEventListener("click",async (e)=>{
    let  email=document.getElementById("usermail").value;
    let passwords=document.getElementById("userpass").value;
    e.preventDefault();
    if(email.trim()===""){
        alert("Please enter email to proceed further")
    }
    else{
    let key="ema_live_GofqTnOHwLAy9Z3MAB8041MB4dXYkHVDvNq3dKxk";
   let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
   let res=await fetch(url);
   let result=await res.json();
let str=``;
str=str+`<div>Password:${passwords}</div>`;
for (key of Object.keys(result)) {
    if(result[key] !=="" && result[key]!==" ")
str=str+`<div>${key}:${result[key]}</div>`

}
results.innerHTML=str;
    }
    email.innerHTML="";
})