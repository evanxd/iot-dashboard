'use strict';

(function() {
  var CHECK_INTERVAL = 10000;
  var urls = url('?urls');
  if (!urls) {
    alert('Cannot get urls param.');
    return;
  }
  var viewer = document.querySelector('#viewer');

  urls.forEach(function(_url, i) {
    var id = 'widget-' + (i + 1);
    if ('html'.includes(url('fileext', _url))) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('id', id);
      iframe.setAttribute('src', _url);
      iframe.setAttribute('frameborder', 0);
      iframe.setAttribute('scrolling', 'no');
      viewer.appendChild(iframe);
    } else {
      var image = new Image();
      var isImageActive = false;

      image.onload = function() {
        isImageActive = true;
      };
      image.onerror = function() {
        setTimeout(function() {
          image.setAttribute('src', _url);
        }, CHECK_INTERVAL);
      };
      setInterval(function() {
        !isImageActive && image.setAttribute('src', _url);
        isImageActive = false;
      }, CHECK_INTERVAL);

      image.setAttribute('id', id);
      image.setAttribute('src', _url);
      viewer.appendChild(image);
    }
  });
}());
