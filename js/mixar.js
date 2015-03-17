;
(function ($) {

    "use strict";

    $(".js-closeTab").click(function () {
        $(this).parents('.tab-pane.active').removeClass('active');

    });
    $(".mx-control-panel-items [data-toggle='tab']").click(function(){

    });
})(jQuery);