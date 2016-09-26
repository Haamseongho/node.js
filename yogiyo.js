var http = require("https");


//https://www.yogiyo.co.kr/api/v1/restaurants-geo/?items=20&order=rank&page=0&search=&zip_code=137030
var requestOptions = {
    hostname : "www.yogiyo.co.kr",
    path : "/api/v1/restaurants-geo/?items=20&order=rank&page=0&search=&zip_code=137030",
    headers : {
        "X-ApiKey":"iphoneap",
        "X-ApiSecret":"fe5183cc3dea12bd0ce299cf110a75a2"
    }
};
var request = http.request(requestOptions,function(response){
    var data = "";
    response.on("data",function(chunk){
       data += chunk; 
    });
    
    response.on("end",function(){
       var yogiyoData = JSON.parse(data);
       console.log(yogiyoData);
    });
});
request.write(data);
request.end();