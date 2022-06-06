function removeStorage() {
    document.cookie = "logged_in=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
    if(getCookie("admin") != null){
        document.cookie = "admin=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
    }
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }

  window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      window.location.reload();
    }
  });