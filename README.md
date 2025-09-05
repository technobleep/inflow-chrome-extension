# Inflow Extension

## Installation Instructions

To add this extension to Google Chrome, follow these steps:

### Loading Your Extension in Chrome

1. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Go to `chrome://extensions/` in the address bar
   - Or click the three dots menu → More tools → Extensions

2. **Enable Developer Mode**
   - In the top-right corner of the Extensions page, toggle on "Developer mode"

3. **Load Your Extension**
   - Click the "Load unpacked" button that appears after enabling developer mode
   - Navigate to your extension folder: `/Users/rebeccasmith/Sites/inflow-extension`
   - Select the folder and click "Select Folder" (or "Open" on some systems)

4. **Your Extension is Now Installed**
   - You should see your extension appear in the extensions list
   - If your extension has a popup (which it does, based on your `popup.html`), you'll see its icon in the Chrome toolbar
   - You can pin it to the toolbar by clicking the puzzle piece icon and then the pin icon next to your extension

### Troubleshooting Tips

- **If you see errors**: Check the Extensions page for any red error messages and fix them in your code
- **If you make changes**: Click the refresh icon on your extension card in the Extensions page to reload it
- **If the icon doesn't appear**: Make sure your `manifest.json` is properly configured and your icon file path is correct

Your extension should now be active and ready to use! Since you have a `content.js` file, it will run on web pages as specified in your manifest, and the popup will be accessible by clicking the extension icon.
