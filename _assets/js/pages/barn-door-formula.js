(function($) {

  'use strict';

  $(function () {

    var siderealDay = (2 * Math.PI) / 1436;

    function formula(rpm, count) {

      return parseFloat(rpm) / (siderealDay * (parseFloat(count)));

    }

    // formula: Radius = (RPM / siderealDay * TPI)

    function calculate() {

      var rpm = $('#formulaRpm').val();
      var threadType = $('#formulaThreadType').val();
      var threadUnit = $('#formulaThreadUnit').val();
      var threadCount = $('#formulaThreadCount').val();

      var threadCountInches, radiusInches, threadCountCm, radiusCm, threadCountMm, radiusMm;

      if (threadType === 'per') {

        switch (threadUnit) {

          case 'inch':

            threadCountInches = parseFloat(threadCount);
            radiusInches = formula(rpm, threadCountInches);

            threadCountCm = threadCountInches / 2.54;
            radiusCm = formula(rpm, threadCountCm);

            threadCountMm = threadCountInches / 25.4;
            radiusMm = formula(rpm, threadCountMm);

            break;

          case 'cm':

            threadCountCm = parseFloat(threadCount);
            radiusCm = formula(rpm, threadCountCm);

            threadCountInches = threadCountCm * 2.54;
            radiusInches = formula(rpm, threadCountInches);

            threadCountMm = threadCountCm / 10;
            radiusMm = formula(rpm, threadCountMm);

            break;

          case 'mm':

            threadCountMm = parseFloat(threadCount);
            radiusMm = formula(rpm, threadCountMm);

            threadCountCm = threadCountMm * 10;
            radiusCm = formula(rpm, threadCountCm);

            threadCountInches = threadCountMm * 25.4;
            radiusInches = formula(rpm, threadCountInches);

            break;

        }

      }
      else {

        switch (threadUnit) {

          case 'inch':

            threadCountInches = 1 / parseFloat(threadCount);
            radiusInches = formula(rpm, threadCountInches);

            threadCountCm = threadCountInches / 2.54;
            radiusCm = formula(rpm, threadCountCm);

            threadCountMm = threadCountInches / 25.4;
            radiusMm = formula(rpm, threadCountMm);

            break;

          case 'cm':

            threadCountCm = 1 / parseFloat(threadCount);
            radiusCm = formula(rpm, threadCountCm);

            threadCountInches = threadCountCm * 2.54;
            radiusInches = formula(rpm, threadCountInches);

            threadCountMm = threadCountCm / 10;
            radiusMm = formula(rpm, threadCountMm);

            break;

          case 'mm':

            threadCountMm = 1 / parseFloat(threadCount);
            radiusMm = formula(rpm, threadCountMm);

            threadCountCm = threadCountMm * 10;
            radiusCm = formula(rpm, threadCountCm);

            threadCountInches = threadCountMm * 25.4;
            radiusInches = formula(rpm, threadCountInches);

            break;

        }

      }

      var precision = 2;

      $('#formulaResult').removeClass('hidden');

      $('#inchesRevolutions').text(rpm);
      $('#cmRevolutions').text(rpm);
      $('#mmRevolutions').text(rpm);

      $('#inchesThreadCount').text(threadCountInches.toFixed(precision));
      $('#inchesResult').text(radiusInches.toFixed(precision) + ' inches');

      $('#cmThreadCount').text(threadCountCm.toFixed(precision));
      $('#cmResult').text(radiusCm.toFixed(precision) + ' cm');

      $('#mmThreadCount').text(threadCountMm.toFixed(precision));
      $('#mmResult').text(radiusMm.toFixed(precision) + ' mm');

    }

    $('#formulaCalculate').on('click', function (e) {
      e.preventDefault();
      calculate();
    });

    $('#formulaScrew').on('change', function (e) {
      e.preventDefault();

      var threadType, threadUnit, threadCount;

      switch ($(this).val()) {
        case 'M4':
          threadType = 'pitch';
          threadUnit = 'mm';
          threadCount = '0.7';
          break;
        case 'M5':
          threadType = 'pitch';
          threadUnit = 'mm';
          threadCount = '0.8';
          break;
        case 'M6':
          threadType = 'pitch';
          threadUnit = 'mm';
          threadCount = '1';
          break;
        case 'M8':
          threadType = 'pitch';
          threadUnit = 'mm';
          threadCount = '1.25';
          break;
        case 'M10':
          threadType = 'pitch';
          threadUnit = 'mm';
          threadCount = '1.5';
          break;
        case 'M12':
          threadType = 'pitch';
          threadUnit = 'mm';
          threadCount = '1.75';
          break;
        default:
          return false;
          break;
      }

      $('#formulaThreadType').val(threadType);
      $('#formulaThreadUnit').val(threadUnit);
      $('#formulaThreadCount').val(threadCount);

    });

  });

})(jQuery);