// Copyright (C) 2014 Che-Liang Chiou.


/*global jQuery */

var Log;

Log = (function ($) {
  'use strict';

  var Log;

  Log = {
    elementId: '#log',

    duration: 8000,

    e: function (message) {
      console.log('ERROR: ' + message);
      $(this.elementId).show().text(message)
        .delay(this.duration).fadeOut(1000);
    },

    d: function (message) {
      console.log('DEBUG: ' + message);
    },
  };

  return Log;
}(jQuery));
