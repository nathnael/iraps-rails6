// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap");
require("@fortawesome/fontawesome-free");

var jQuery = require("jquery");

// import jQuery from "jquery";
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

// require("bootstrap");
require("admin-lte");
// require("dataTables.bootstrap4");
// require("responsive.bootstrap4");
// require("dataTables.responsive");
// require("admin-lte/plugins/pdfmake/pdfmake");
// require("admin-lte/plugins/pdfmake/vfs_fonts");
// require("dataTables.buttons");
// require("buttons.bootstrap4");
// require("buttons.colVis");
// require("buttons.flash");
// require("buttons.html5");
// require("buttons.print");

// require("admin-lte/plugins/moment/moment-with-locales");
// require("admin-lte/plugins/inputmask/jquery.inputmask");
// require("admin-lte/plugins/daterangepicker/daterangepicker");
// require("bootstrap-datetimepicker-4.17.37");

require("chart.js");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
global.toastr = require("toastr");

$(document).ready(function() {
    $('.iraps_datatable').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "responsive": true,
        "dom": 'lBfrtip',
        "buttons": [
            'copy', 'csv', 'pdf', 'print'
        ]
    });

    $('#date_received').datetimepicker();
});

