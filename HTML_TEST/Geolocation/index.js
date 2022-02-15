
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
    lat=position.coords.latitude;
    lon = position.coords.longitude;
    latlon=new google.maps.LatLng(lat, lon);
    mapholder=document.getElementById('mapholder')
	mapholder.style.height='250px';
	mapholder.style.width='500px';

    var myOptions={
		center:latlon,zoom:14,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
	};
	var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
	var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});

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

