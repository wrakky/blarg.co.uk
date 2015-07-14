'use strict';

(function($) {

  window.Blarg = window.Blarg || {};

  Blarg.Analytics = {

    active() {

      return location.hostname === 'blarg.co.uk';

    },

    init() {

      if (this.active()) {

        (function (i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
          a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-128849-2', location.hostname);

      }

    },

    send(obj) {

      if (this.active()) {
        ga('send', obj);
      }
      else {
        console.info('analytics disabled', obj);
      }

    },

    /**
     * Tracks a page view
     */
    pageView() {

      this.send({
        hitType: 'pageview'
      });

    },

    /**
     * Tracks an event
     * @param {String} category
     * @param {String} action
     * @param {String} label
     * @param {Number} value
     */
    event(category, action, label, value) {

      var eventObj = {
        'hitType': 'event',
        'eventCategory': category,
        'eventAction': action
      };

      if (!!label) {
        eventObj.eventLabel = label;
        if (!!value) {
          eventObj.eventValue = value;
        }
      }

      this.send(eventObj);

    }

  };

  /*
   * Initialise account and track page view
   */

  Blarg.Analytics.init();

  $(function () {
    Blarg.Analytics.pageView();
  });

})(jQuery);