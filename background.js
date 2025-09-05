// Background service worker to handle icon clicks
chrome.action.onClicked.addListener(async (tab) => {
    // Send message directly to content script when icon is clicked
    try {
        const response = await chrome.tabs.sendMessage(tab.id, { 
            action: 'modifyMaxWidth',
            selector: '#app .v-btn.text-link .v-btn__content',
            value: 'none'
        });
        console.log('CSS modification response:', response);
    } catch (error) {
        console.error('Failed to send message to content script:', error);
    }
});
