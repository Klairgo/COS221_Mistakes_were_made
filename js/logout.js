function removeStorage() {
    document.cookie = "logged_in=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
    if(getCookie("admin") != null){
        document.cookie = "admin=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
    }
    window.location.reload();
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }

  window.addEventListener( "pageshow", function ( event ) { // must just check
    if(window.event){
      if(window.event.clientX < 40 && window.event.clientY < 0){
      document.cookie = "logged_in=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
      if(getCookie("admin") != null){
          document.cookie = "admin=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/";
      }
      window.location.reload();
    }
    
    }
});