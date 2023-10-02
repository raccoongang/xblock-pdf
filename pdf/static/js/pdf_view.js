/* Javascript for pdfXBlock. */
function pdfXBlockInitView(runtime, element) {
    /* Weird behaviour :
     * In the LMS, element is the DOM container.
     * In the CMS, element is the jQuery object associated*
     * So here I make sure element is the jQuery object */
    if (element.innerHTML) {
        element = $(element);
    }

    $(function () {
        element.find('.pdf-download-button').on('click', function () {
            var handlerUrl = runtime.handlerUrl(element, 'on_download');
            $.post(handlerUrl, '{}');
        });

        /*
         * <object> tag shows only first page in iPad, iPhone and iPod
         * 'View PDF' option will appear in these devices to view pdf in new tab */

        let isRetinaDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isRetinaDevice) {
            $('.pdf-view-button').show();
        }
    });
}
