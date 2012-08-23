function init(){
	document.addEventListener('deviceready', onDeviceReady, false);
	// an interval check every 500 milliseconds to see whether // PhoneGap is ready. Once done, the interval will be
	// cleared and normal processing can begin.
	var intervalID = window.setInterval(function(){
		if(PhoneGap.available){
			onDeviceReady();
		}
	}, 500);
}

function onDeviceReady(){
	window.clearInterval(intervalID);
	// set to true
	isPhoneGapReady = true;

	alert('the device is now ready');
}
window.onload=init;