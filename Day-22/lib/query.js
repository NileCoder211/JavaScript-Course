

function query(endpoint, callback, options){
    fetch(`http://localhost:3000/${endpoint}`, options)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        setTimeout(()=>{
             callback(json);
        }, 2000)
       
    })
    
}