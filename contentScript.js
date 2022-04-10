if (typeof init === 'undefined') {
    const init = function () {
        //If youtube ad starts at the begin of the video
        try {
            skipAd();
        } catch (error) {
        }
        //If youtube ad starts in the middle of the video
        try {
        document.getElementsByClassName('video-ads ytp-ad-module')[0].addEventListener("DOMNodeInserted", function (event) {
                skipAd();
          }, false);
        } catch (error) {
        }
    }
    init();
}

function skipAd() {
    var button;
    button = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0];
    if (button) {
        button.click();
    }
}
