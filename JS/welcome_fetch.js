fetch("welcome.html").then(response=>response.text().then(data=>{

    document.getElementById("welcome").innerHTML=data;
})).catch(error=>console.error("Welcome Load Error"+error));

fetch("reason.html").then(response=>response.text()).then(data=>{

    document.getElementById("reason").innerHTML = data;
}).catch(error=>console.error('Reason Load Error'+error));

fetch("location.html").then(response=>response.text()).then(data=>{
document.getElementById("location").innerHTML=data;
}).catch(error=>console.error("location Load Error"+error));





fetch("activity.html").then(response=>response.text()).then(data=>(document.getElementById("activity").innerHTML=data))
.catch(error=>console.error("activity Load Error"+error));

fetch("Nav.html").then(response=>response.text()).then(data=>(document.getElementById("Nav-bar").innerHTML=data))
.catch(error=>console.error("activity Load Error"+error));

fetch("review-2.html").then(response=>response.text()).then(data=>{

    document.getElementById("review").innerHTML = data;
}).catch(error=>console.error('Reason Load Error'+error));