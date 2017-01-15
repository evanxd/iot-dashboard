'use strict';

(function() {
  var CHECK_INTERVAL = 10000;
  var urls = new Url(window.location.search).query.urls;
  if (!urls) {
    alert('Cannot get urls param.');
    return;
  } else {
    urls = Array.isArray(urls) ? urls : [urls];
  }
  var viewer = document.querySelector('#viewer');

  urls.forEach(function(url, i) {
    var image = new Image();
    var id = 'mjpeg-' + (i + 1);
    var isImageActive = false;

    image.onload = function() {
      isImageActive = true;
    };
    setInterval(function() {
      !isImageActive && image.setAttribute('src', url);
      isImageActive = false;
    }, CHECK_INTERVAL);

    image.onerror = function() {
      setTimeout(function() {
        image.setAttribute('src', url);
      }, CHECK_INTERVAL);
    };

    image.setAttribute('id', id);
    image.setAttribute('src', url);
    viewer.appendChild(image);
  });
}());
