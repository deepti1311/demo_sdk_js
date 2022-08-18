

function iFrame(){

    let iframe = document.createElement('iframe');
    iframe.src= "payDemo.html";
    iframe.id="iframe_pay"
    iframe.setAttribute("style","background-color:aquamarine; height:100%;width:40%; text-align: center;");

    if( document.getElementById("demo").childNodes.length < 1){
        document.getElementById("demo").appendChild(iframe);
    }
}


function closeSelf(){
    console.log(parent);
    parent.window.postMessage("removetheiframe","*");
}

function receiveMessage(event){
    if(event.data=="removetheiframe"){
         document.getElementById("iframe_pay").remove();
    }else{
        document.getElementById("iframe_pay").remove();
   
    }
}

window.addEventListener("message",receiveMessage);