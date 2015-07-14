'use strict';

(function($) {

  $(function() {

    // clicking external links
    $('a[href^=http]').on('click', function(e) {

      // don't include popups
      if ($(this).attr('rel') !== 'popup' && !$(this).hasClass('gallery')) {

        e.preventDefault();

        // track external link event
        Blarg.Analytics.event('External Link', location.pathname, this.href);

        // open in new window
        window.open(this.href);

      }

    });

    // clicking anchor links
    $('a[href^=#]').on('click', function(e) {

      // track anchor link event
      var hash = this.href.replace(/^(.+)#/, '#');
      Blarg.Analytics.event('Anchor Link', location.pathname, hash);

    });

    // bootstrap tooltips
    $('[data-toggle=tooltip]').tooltip({
      container: 'body'
    });

  });

})(jQuery);