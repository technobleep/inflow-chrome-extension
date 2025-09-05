// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const modifyButton = document.getElementById('toggleButton');
    
    modifyButton.addEventListener('click', async function() {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        
        chrome.tabs.sendMessage(tabs[0].id, { 
            action: 'modifyMaxWidth',
            selector: '"app .v-btn.text-link .v-btn__content',
            value: 'none'
        }, response => console.log('Response:', response));
    });
});