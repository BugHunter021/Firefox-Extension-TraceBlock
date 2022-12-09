(function () {

    'use strict';
    var initmKillerFired = false;

    function initmKiller() {
      if(initmKillerFired == true) {
    		return;
    	} else {
        chrome.runtime.sendMessage({action: 'getmKillStatus', url: location.host}, function(res) {
        	injectmKiller(res.mKillStatus);
        });
        initmKillerFired = true;
      }
    }

    window.addEventListener("load", initmKiller);

	document.addEventListener('minerBlocked', function(e) {
		chrome.runtime.sendMessage({action: 'minerBlockedFromContent', minerUrl: e.detail.minerUrl}, function() {});
	}, false);

}());
