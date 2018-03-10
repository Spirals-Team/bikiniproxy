(function (global) {
  global.preloadImages=function (images, callback) {
    window.IMAGES_CACHE = {};

    var url;
    var image;
    var count = images.length;

    if (images.length === 0) {
      callback && 'function'===typeof(callback) && callback();
      return;
    }
    while (url = images.pop()) {
      image = new Image();
      image.onload = (function (key) {
        console.log('Loading image: ', key);
        window.IMAGES_CACHE[key] = this;

        count--;
        if (count === 0) {
          console.log('All images are ready...');

          callback && 'function'===typeof(callback) && callback();
        }
      }).bind(image, url);

      image.src = url;
    }
  };

  global.loadScripts = function (scripts, callback) {
    var url, s, count = scripts.length;
    if (scripts.length === 0) {
      callback && 'function'===typeof(callback) && callback();
      return;
    }
    while (url = scripts.pop()) {
      s = document.createElement('script');
      s.defer = true;
      s.onload = function () {
        count--;
        if (count===0) {
          console.log('All scripts are ready...');
          callback && 'function'===typeof(callback) && callback();
        }
      };
      s.src = url;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }
})(window);
