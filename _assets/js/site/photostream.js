(function($) {

  'use strict';

  const compileTemplate = (template, data) => {

    return template
      .replace(/\{\{url\}\}/g, data.url)
      .replace(/\{\{title\}\}/g, data.title)
      .replace(/{\{tn\}\}/g, data.tn);

  };

  const template = `
		<div class="col-xs-4">
			<a href="{{url}}" class="thumbnail" data-toggle="tooltip" title="{{title}}">
				<img src="{{tn}}" alt="{{title}}">
			</a>
    </div>
  `;

  const generateContent = (photos) => {

    let fragment = $(document.createDocumentFragment());

    let currentRow;

    for (let i = 0, ilen = photos.length; i < ilen; i++) {

      let photo = photos[i];

      if (i % 3 === 0) {
        currentRow = $('<div class="row"></div>');
      }

      currentRow.append($(compileTemplate(template, photo)));

      if (i % 3 === 2) {
        fragment.append(currentRow);
      }

    }

    let photoContainer = $('.photostream', '#sidebar');
    photoContainer.html('');

    photoContainer.append(fragment);

    $('[data-toggle="tooltip"]', photoContainer).tooltip()

  };

  const getPhotostream = (type) => {

    let cacheKey = 'photostream';

    if (Blarg.Cache.exists(cacheKey)) {
      generateContent(Blarg.Cache.get(cacheKey));
    }
    else {
      $.getJSON(`http://api.blarg.co.uk/photostream`, data => {
        Blarg.Cache.set(cacheKey, data, 60);
        generateContent(data);
      });
    }

  };

  if (window.PHOTOSTREAM) {
    getPhotostream();
  }

})(jQuery);
