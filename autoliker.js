// Paste this in your browser's DOM explorer while on the tinder website
// To open DOM explorer, use Cmd+Option+i (macOS) or Ctr+Shift+i (Windows)
a = setInterval(
    function(){
        var elem = document.getElementsByClassName("recsGamepad__button--like");
        elem[0].click()
    },
    // adding a 3 second time gap between successive lags
    3000
)