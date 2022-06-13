var api_key='c33c54f0-8a51-4163-8d53-f8cae130c004';

const request = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.thecatapi.com/v1/images/search?size=full";
    request.open(method,url,true);
    request.setRequestHeader(api_key);
request.onreadystatechange=function(){
    if (request.readyState==4 && request.status==200){
        console.log("work");
         try{
             var data=JSON.parse(request.responseText);
             document.getElementById('id').innerHTML = data[0]['id'];
             document.getElementById('url').innerHTML =data[0]['url'];
             var html = '<img src="' + data[0]['url'] + '">';
             document.getElementById('image').innerHTML = html;
         }catch(exception){
             console.log(exception.message);
             return;
         }
        
     }
}
request.send();


    
