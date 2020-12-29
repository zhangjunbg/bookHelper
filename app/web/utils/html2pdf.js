const html2Canvas = (...options) => {
    return html2canvas(...options)
}
const jsPDF2 = (...options) => {
    if(window.$isIE) {
        return jspdf(...options)
    }
    return jspdf.jsPDF(...options)
};
export default {
    install(Vue, options) {
        Vue.prototype.getPdf = function (el, title) {
            console.log(document.getElementById(el).scrollHeight);
            html2Canvas(document.getElementById(el), {
                allowTaint: true,
                height: document.getElementById(el).scrollHeight,
                windowHeight: document.getElementById(el).scrollHeight / 592.28 * 841.89,
                ignoreElements: (element) => {
                    if (element.id == 'ignoreBtn') return true;
                }
            }).then(function (canvas) {
                let contentWidth = canvas.width
                let contentHeight = canvas.height
                let pageHeight = contentWidth / 592.28 * 841.89
                let leftHeight = contentHeight
                let position = 0
                let imgWidth = 595.28
                let imgHeight = 592.28 / contentWidth * contentHeight
                let pageData = canvas.toDataURL('image/jpeg', 1.0)
                let PDF = new jsPDF2('', 'pt', 'a4')
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight
                        position -= 841.89
                        if (leftHeight > 0) {
                            PDF.addPage()
                        }
                    }
                }
                PDF.save(title + '.pdf')
            })
        }
    }
}