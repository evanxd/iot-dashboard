/* global url */
'use strict';

(function() {
  var widgetUrls = url('?widgets');
  if (!widgetUrls) {
    alert('Cannot get the widgets param.');
    return;
  }
  var viewer = document.querySelector('body');

  widgetUrls.forEach(function(_url, i) {
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
      // Check mjpeg images per 10 minutes. If unalive, load it again.
      setInterval(function() {
        !isImageActive && image.setAttribute('src', _url);
        isImageActive = false;
      }, 10000);

      image.setAttribute('id', id);
      image.setAttribute('src', _url);
      viewer.appendChild(image);
    }
  });
}());
