var http = require("http");
var queryString = require("querystring");

var requestData={
    "send_phone" : "01022205736",
    "dest_phone" : "01046182721",
    "msg_body" : "Hi , I'm seongho"
}

var data = queryString.stringify(requestData);


//https://www.yogiyo.co.kr/api/v1/restaurants-geo/?items=20&order=rank&page=0&search=&zip_code=137030
var requestOptions = {
    method : "POST",
    hostname : "api.openapi.io",
    path : "/ppurio/1/message/sms/dobestan",
    headers : {
        "x-waple-authorization":"MTkyMC0xNDEzODU0NTAwMzU3LTllM2VkOTM3LTYwMTEtNGU2Zi1iZWQ5LTM3NjAxMTNlNmYyMg=="
     ,"Content-Type" : "application/x-www-form-urlencoded"
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