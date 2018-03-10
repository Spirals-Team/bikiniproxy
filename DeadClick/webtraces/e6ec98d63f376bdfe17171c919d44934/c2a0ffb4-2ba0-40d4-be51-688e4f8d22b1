//Created for WBS_51 Process omniture cookie information webStatsUtil.js
//newFunction
function getCookieValueByName(name){
	var cookieContent='';
	var allCookies = document.cookie;
	if(allCookies!=null){
		var cPos = allCookies.indexOf(name+'=');
		if(cPos != -1){
			var cdstart = cPos + name.length+1;
			var cdend = allCookies.indexOf(";", cdstart);
			if(cdend == -1) cdend = allCookies.length; 
			cookieContent = allCookies.substring(cdstart,cdend);  
		}
	}
	return cookieContent ;
}

function getVPU(cookieContent,my_Stats_type){
	var vpu='Not Available';
	if(cookieContent!=null && cookieContent!=''){ 
		var array = cookieContent.split(':');  
		try{vpu=array[0];
		}catch(e){}
	}
	else
	{
		if(my_Stats_type == "H")
			vpu='-';
	}
	return vpu;
}



function getDutyStation(cookieContent,my_Stats_type){
	var dutystation='Not Available';
	if(cookieContent!=null &&  cookieContent!=''){ 
		var array = cookieContent.split(':');  
		try{
			dutystation=array[array.length-1];
		}catch(e){}
	}
	else
	{
		if(my_Stats_type == "H")
			dutystation='-';
	}
	return dutystation;
} 

function getUserType(cookieContent){
	var userType='U';
	if(cookieContent!=null &&  cookieContent!=''){ 
		userType='I';
	}
	return userType;
} 
