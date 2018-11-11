document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("submit", event => {
        const { target: form } = event;
        const regex = new RegExp(form.regex.value);
        const replaceText = form.replaceText.value;
        chrome.tabs.query({ "active": true }, ([tab]) => {
            const { url, id } = tab;
            const newUrl = url.replace(regex, replaceText);
            chrome.tabs.update(id, { url: newUrl });
        });
    });
});