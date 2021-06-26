chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse){
    console.log(message)
    let topbar = document.getElementById('navigation');
    if (message === "blue"){
        topbar.style.backgroundColor = "rgb(101,142,253)";
    } else if (message === "red"){
        topbar.style.backgroundColor = "rgb(252,101,101)";

    }
}