
 var x = document.getElementById("demo");  



function getLocation(){

   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else
    {
        x.innerHTML="不支持此功能";
    }

}

function showPosition(position){
 
    x.innerHTML = "緯度: " +position.coords.latitude + "<br>經度: " + position.coords.longitude
    ;
}

function showError(error){
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML="用戶拒絕";
            break;
        case error.POSITION_UNAVALIABLE:
            x.innerHTML="位置不可用";
            break;
        case error.TIMEOIT:
                x.innerHTML ="請求逾時";
                break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="未知錯誤";
            break;
      
    }
}

