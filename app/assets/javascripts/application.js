//= require FontAwesome.js
//= require Chart.min.js
//= require highmaps.js
//= require data.js
//= require exporting.js
//= require drilldown.js
//= require offline-exporting.js
//= require Ethiopia-Regions.js


//= require jquery.calendars/jquery.plugin.js
//= require jquery.calendars/jquery.calendars.js
//= require jquery.calendars/jquery.calendars.plus.js
//= require jquery.calendars/jquery.calendars.picker.js
//= require jquery.calendars/jquery.calendars.ethiopian.js
//= require jquery.calendars/jquery.calendars.ethiopian-am.js

$(document).ready(function() {
    $('.gregorian_datepicker').calendarsPicker({
        format: 'DD, MM d, yyyy',
        onSelect: function(dateText, inst) {
            var dateAsObject = $(this).calendarsPicker('getDate');
            // var jd = dateAsObject[0].toJD();
            // var date_gc = $.calendars.fromJD(jd);
            $(this).val(dateAsObject[0].formatDate('DD, MM d, yyyy'));
        }
    });

    $('.ethiopian_datepicker').calendarsPicker({
        calendar: $.calendars.instance('ethiopian', 'am'),
        format: 'DD, MM d, yyyy',
        onSelect: function(dateText, inst) {
            var dateAsObject = $(this).calendarsPicker('getDate');
            var jd = dateAsObject[0].toJD();
            var date_gc = $.calendars.instance('ethiopian').fromJD(jd);
            $(this).val(date_gc.formatDate('DD, MM d, yyyy'));
        }
    });
});