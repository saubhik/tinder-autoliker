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

// If you reach maximum likes then copy paste the below code
// This will dislike all the profiles
// This might improve your ranking
a = setInterval(
    function(){
        var elem = document.getElementsByClassName("recsGamepad__button--dislike");
        elem[0].click()
    },
    // adding a 2 second time gap between successive lags
    2000
)