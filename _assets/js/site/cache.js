(function($) {

  'use strict';

  window.Blarg = window.Blarg || {};

  Blarg.Cache = {

    set(name, value, ttl) {

      let cacheValue = JSON.stringify({
        value,
        expires: Date.now() + (ttl*60*1000)
      });

      localStorage.setItem(name, cacheValue);

    },

    get(name) {

      let cacheValue = localStorage.getItem(name);

      if (cacheValue === null) {
        return null;
      }

      cacheValue = JSON.parse(cacheValue);

      if (cacheValue.expires < Date.now()) {
        return null;
      }

      return cacheValue.value;

    },

    exists(name) {

      return this.get(name) !== null;

    }

  };

})(jQuery);