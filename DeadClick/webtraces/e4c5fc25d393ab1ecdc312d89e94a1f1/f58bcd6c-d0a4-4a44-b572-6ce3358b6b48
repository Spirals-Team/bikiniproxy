/** lint:ignore **/

window.Krux||((Krux=function(){
    Krux.q.push(arguments);
}).q=[]);
(function(){
  function retrieve(n){
    var k= 'kx'+'foxnews_'+n, ls=(function(){
      try {
        return window.localStorage;
      } catch(e) {
        return null;
      }
    })();
    if (ls) {
        return ls[k] || '';
    } else if (navigator.cookieEnabled) {
        var m = document.cookie.match(k+'=([^;]*)');
        return (m && unescape(m[1])) || '';
    } else {
        return '';
    }
  }
  Krux.user = retrieve('user');
  Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : [];

})();
