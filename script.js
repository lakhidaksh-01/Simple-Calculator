document.getElementById('display').addEventListener('keydown',function(e){
    if(e.key==="Enter"){
        document.getElementById('display').value =eval(document.getElementById('display').value);
    }
})