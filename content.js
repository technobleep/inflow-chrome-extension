function modifyMaxWidth(elementSelector, maxWidthValue = '200px') {
    const elements = document.querySelectorAll(elementSelector);
    
    elements.forEach(element => {
        element.style.maxWidth = maxWidthValue;
    });
    
    return elements.length > 0;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'modifyMaxWidth') {
        const success = modifyMaxWidth("#app .v-btn.text-link .v-btn__content", "none");
        sendResponse({ success: success });
    }
});

