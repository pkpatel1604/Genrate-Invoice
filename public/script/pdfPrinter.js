let printAsPdf;

(function() {
    printAsPdf =  (ignore) => {
        $(ignore).hide();
        var htmlContent = $("html").html();
        var printWindow = window.open('', '', 'width=800');
        printWindow.document.write("<html>" + htmlContent + "</html>");
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
            $(ignore).show();
        }, 100);
    }
 })();