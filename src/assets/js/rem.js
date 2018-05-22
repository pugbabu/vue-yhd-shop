;(function(doc, win) {
    let docEl = document.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = () => {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        if (clientWidth > 640) {
            docEl.style.fontSize = 85.33 + 'px'
        } else {
            if (clientWidth < 320) {
                docEl.style.fontSize = 42.67 + 'px'
            } else {
                docEl.style.fontSize = `${clientWidth / 750 * 100}px`
            }
        }
    }
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
    
})(document, window)