'use strict';

(function($) {

  window.Blarg = window.Blarg || {};

  Blarg.Social = {

    openWindow(url, id, width, height) {

      var left = (window.screen.width / 2) - (width / 2);
      var top = (window.screen.height / 4) - (height / 4);

      window.open(
        url,
        'share-' + id + '-window',
        'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left
      );

    },

    twitter(url) {

      Blarg.Analytics.event('Social', 'Twitter', url);

      this.openWindow(url, 'twitter', 550, 300);

    },

    facebook(url) {

      Blarg.Analytics.event('Social', 'Facebook', url);

      this.openWindow(url, 'facebook', 800, 500);

    },

    googleplus(url) {

      Blarg.Analytics.event('Social', 'Google+', url);

      this.openWindow(url, 'googleplus', 500, 500);

    }

  };

  $(function () {

    $('a.social-share').on('click', function (e) {

      e.preventDefault();

      var network = $(this).data('network');

      if (!!Blarg.Social[network]) {
        Blarg.Social[network](this.href);
      }

    });

  });

})(jQuery);
