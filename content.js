console.log("start");


window.onload = () => {
    firstID = null
    function finder()
    {
        console.log('finder')
        firstID = document.getElementById("content");
         console.log(firstID);
    }
    if (firstID === null) {
        console.log('if')
        setTimeout(finder(),5000);
    }
    const config = {subtree: true, characterData: true, childList: true, attributes: true};
    const targetNode = firstID;
    console.log(targetNode);
    const observer = new MutationObserver(mutations =>{
        mutations.forEach(record => {
            if (record.target.innerText.indexOf('Skip Ad') != -1)
            {
                console.log(record.target);
                record.target.click();
                console.log('skip')
                
            }
            
            
            
        }) 
    });
    observer.observe(targetNode, config);



}