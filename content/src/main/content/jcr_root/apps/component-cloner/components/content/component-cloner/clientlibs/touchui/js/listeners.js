/**
 * Touch-UI Listeners.
 */
(function ($, $document, gAuthor) {

    "use strict";

    /**
     * Event handler for when submitting/saving the dialog.
     */
    $document.on("click", ".cq-dialog-submit", function (e) {
        var $element = $(this).parents(".cq-dialog").find(".component-cloner");
        if ($element.length) {
            e.stopPropagation();
            e.preventDefault();

            $.ajax({
                method: 'GET',
                url: $element.parents("form").attr("action") + '.clone.json',
                dataType: 'JSON',
                data: { path: $('input[name="./path"]').val() }
            }).success(function(data, status, headers, config) {
                var href = window.location.href;

                // remove any existing error query params
                href = href.replace('&componentClonerError=true', '');
                href = href.replace('?componentClonerError=true', '');

                if (data.componentClonerError) {
                    var hrefError = (window.location.href.indexOf('?') > 1 ? '&' : '?') + 'componentClonerError=true';
                    window.location.replace(hrefError);
                } else {
                    window.location.replace(href);
                }
            }).error(function(data, status, headers, config) {
                var hrefError = (window.location.href.indexOf('?') > 1 ? '&' : '?') + 'componentClonerError=true';
                window.location.replace(hrefError);
            });
        }
    });
}(jQuery, jQuery(document), Granite.author));
