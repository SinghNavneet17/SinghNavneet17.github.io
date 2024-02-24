function resumeDownload(){
    window.open(
       "https://drive.google.com/file/d/1sWN2wWDBRC8zYoNs9vwz4X0lwvr9DjdM/view?usp=sharing"
      );
      
}

GitHubCalendar(".calendar", "SinghNavneet17");
                        

let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click',function(){
    
    window.open(
        "https://github.com/SinghNavneet17",
        "_blank"
      );

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click',function(){
    
    window.open(
        "https://www.linkedin.com/in/navneet-singh-0312b1237/",
        "_blank"
      );

})

let githubBtn2 = document.querySelector("#footer-github");

githubBtn2.addEventListener('click',function(){
    
    window.open(
        "https://github.com/SinghNavneet17",
        "_blank"
      );


})

let linkedinBtn2 = document.querySelector("#footer-linkedin");

linkedinBtn2.addEventListener('click',function(){

    window.open(
        "https://www.linkedin.com/in/navneet-singh-0312b1237/",
        "_blank"
      );

})


let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click',function(){
    
    window.location.href = '#contact';

})





let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "250px";
})
  
closeBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "0";
})
  

let btnform = document.querySelector("#form-submit");

btnform.addEventListener('click',function(){

    window.location.href = "https://SinghNavneet17.github.io/"

})


let navbarColor = document.querySelectorAll(".nav-link");

console.log(navbarColor);
for(let nav of navbarColor){

    nav.addEventListener("click",function(){
    
        let curr = document.querySelector("#nav-bar a.home");
        curr.classList.remove('home');        
        nav.classList.add("home");

    })

}

function paymentwalletGithub(){

    window.open("https://github.com/SinghNavneet17/Payment-wallet-Application","_blank");

}

function paymentwalletVideo(){

    window.open("https://drive.google.com/file/d/178LwA9xvuGv_jVtqfNVNw_-4K1bQ6JQ8/view?usp=sharing","_blank");

}

function FoodieExpressGithub(){

    window.open("https://github.com/bhupirao/Foodie-Express","_blank");

}

function FoodieExpressVideo(){

    window.open("https://drive.google.com/file/d/1w9u8PEheoz9XL_HMbo61ZQCR-QaMzoed/view?usp=sharing","_blank");

}


function cimsGithub(){

    window.open("https://github.com/SinghNavneet17/Crime-Information-Management-System","_blank");

}

function cimsvideo(){

    window.open("https://drive.google.com/file/d/1w9u8PEheoz9XL_HMbo61ZQCR-QaMzoed/view?usp=sharing","_blank");

}

function shineGithub(){

    window.open("https://github.com/SinghNavneet17/Shine-website-Clone","_blank");

}

function shineLive(){

    window.open("https://shine-clone-0023.netlify.app/","_blank");

}