let colorBtn = document.body.getElementsByClassName('switch')[0];
let back = document.body.getElementsByClassName('back')[0];
let params = {
    active: true,
    currentWindow: true
}

if (!colorBtn.classList.contains('blue') && !colorBtn.classList.contains('red')){
    chrome.storage.sync.get(['key'], function(result) {
        if (result.key){
            colorBtn.classList.add(result.key);
            back.classList.add(result.key);
        } else {
            colorBtn.classList.add("blue");
            back.classList.add("blue");
        }
        
    });
}




let msg = "";

colorBtn.addEventListener('click', () => {
    if (colorBtn.classList.contains('blue')){
        colorBtn.classList.remove('blue');
        back.classList.remove('blue');
        colorBtn.classList.add('red');
        back.classList.add('red');


        chrome.storage.sync.set({key:"red"}, () => {});

    } else if (colorBtn.classList.contains('red')){
        colorBtn.classList.remove('red');
        back.classList.remove('red');
        colorBtn.classList.add('blue');
        back.classList.add('blue');
        chrome.storage.sync.set({key:"blue"}, () => {});


    }
    
    chrome.tabs.query(params, gotTab)
    
})
back.addEventListener('click', () => {
    if (colorBtn.classList.contains('blue')){
        colorBtn.classList.remove('blue');
        back.classList.remove('blue');
        colorBtn.classList.add('red');
        back.classList.add('red');
        chrome.storage.sync.set({key:"red"}, () => {});


    } else if (colorBtn.classList.contains('red')){
        colorBtn.classList.remove('red');
        back.classList.remove('red');
        colorBtn.classList.add('blue');
        back.classList.add('blue');
        chrome.storage.sync.set({key:"blue"}, () => {});


    }
    chrome.tabs.query(params, gotTab)

})


function gotTab(tab){
    if (colorBtn.classList.contains('blue')){
        

        msg = "blue"
        chrome.tabs.sendMessage(tab[0].id, msg)
        console.log(tab[0])
    } else if (colorBtn.classList.contains('red')){
        msg = "red"

        chrome.tabs.sendMessage(tab[0].id, msg)

    }
    
    
}