// Selecting require documents
const wrapper = document.querySelector(".wrapper");
toast = wrapper.querySelector(".toast");
wifiIcon = wrapper.querySelector(".fa-wifi");
title = wrapper.querySelector("span");
subTitle = wrapper.querySelector("p");


window.onload = () =>{ //once window loaded
   function ajax(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true); //Sending get request to the url
    xhr.onload = ()=>{ //once ajax loaded
        //if ajax status is equal to 200 or less than 300 that mean user is getting data/response from that provided URL
        //or user is online so he/she is getting response or 200 status code
        if(xhr.status==200 && xhr.status<300){
            toast.classList.remove("Offline");
            title.innerText = "You're online";
            subTitle.innerText = "Connected to internet";
            // wifiIcon.innerHTML = '<i class="fa-solid fa-wifi"></i>';
        }else{ //user isn't online or may getting something other error
            offline(); //Calling both functions on both conditions
        }
    }
    xhr.onerror = ()=>{ //if the passed URL is incorrect or returning 404 or other error
        offline(); //Calling both functions on both conditions
    }
    xhr.send();

   }
   function offline(){ //creating offline function
    toast.classList.add("Offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Internet is disconnected";
    wifiIcon.innerHTML = '<i class="fa-solid fa-plane-up"></i>';
   }
   //let put this ajax call inside the setInterval function so we can call it after every 100ms
   //so we don't need to refresh the page to see the update.
   setInterval(()=>{
    ajax(); //calling ajax function
   },100)
   
}