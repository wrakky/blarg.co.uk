(function($) {

  $(function () {

    $('#results-toggle').on('change', function () {
      $('tr', '.table').show();
      switch (this.value) {
        case '2':
          $('tbody > tr').not('.valid').hide()
          break;
        case '3':
          $('tbody > tr').not('.modernvalid').hide()
          break;
      }
      $('#results-total').text($('tbody > tr:visible').length);
    });

    $('tbody td:first-child').hover(
      // mouse enter
      function (e) {
        var dateFormat = $(this).text();
        $(this).data('dateFormat', dateFormat);
        var dateText = dateFormat
          .replace('Y', '2013')
          .replace('y', '13')
          .replace('m', '08')
          .replace('M', 'Aug')
          .replace('F', 'August')
          .replace('n', '8')
          .replace('d', '09')
          .replace('j', '9');
        $(this).text(dateText);
      },
      // mouse leave
      function (e) {
        $(this).text($(this).data('dateFormat'));
      }
    )

  });

})(jQuery);