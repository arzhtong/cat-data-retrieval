const api_key='c33c54f0-8a51-4163-8d53-f8cae130c004';

const request = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.thedogapi.com/v1/breeds";
    request.open(method,url,true);
    request.setRequestHeader('x-api-key',api_key);
request.onreadystatechange=function(){
    if (request.readyState==4 && request.status==200){
        console.log("work");
         try{
             var data=JSON.parse(request.responseText);
             for (let i=0;i<data.length;i++){
             var selections=document.getElementById('breed_select');
            var option = document.createElement("option");
            option.text=data[i]['name'];
            option.id=data[i]['id'];
            selections.add(option);
                 
             
             }
         }catch(exception){
             console.log(exception.message);
             return;
         }
        
     }
}
request.send();
function getCatImage(data){
    document.getElementById('id').innerHTML = data[0]['id'];
    document.getElementById('url').innerHTML =data[0]['url'];
    var html = '<img src="' + data[0]['url'] + '">';
    document.getElementById('image').innerHTML = html;
}

            
             
    
        
    
