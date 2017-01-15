'use strict';

(function() {
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
    image.onerror = function() {
      setTimeout(function() {
        image.setAttribute('src', url);
      }, 10000);
    };
    image.setAttribute('id', id);
    image.setAttribute('src', url);
    viewer.appendChild(image);
  });
}());
