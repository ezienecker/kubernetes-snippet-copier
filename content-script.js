const SNIPPET_CLASS_FROM_KUBERNETES = 'language-shell';
const COPY_TO_CLIPBOARD_BUTTON = 'btn-clipboard';

addCopyButtonToSnippets();

function addCopyButtonToSnippets() {
    var snippets = document.getElementsByClassName(SNIPPET_CLASS_FROM_KUBERNETES);
    for (const counter in snippets) {
        var element = snippets[counter];
        if (isInvalidElement(element)) {
            continue;
        }

        var copyButton = createCopyButton();
        snippets[counter].addEventListener('click', copySnippetToClipboard, false);
        snippets[counter].appendChild(copyButton);
    }
}

function isInvalidElement(element) {
    return !(typeof element === 'object' && element.classList.contains(SNIPPET_CLASS_FROM_KUBERNETES));
}

function createCopyButton() {
    var icon = document.createElement('button');
    icon.innerText = 'Copy';
    icon.className = COPY_TO_CLIPBOARD_BUTTON;
    return icon;
}

function copySnippetToClipboard() {
    var snippet = this.innerText.slice(0, -4).trim();
    navigator.clipboard.writeText(snippet);
    
    var btnCopy = this.getElementsByClassName(COPY_TO_CLIPBOARD_BUTTON)[0];
    btnCopy.textContent = 'Copied!';

    setTimeout(function() { btnCopy.textContent = 'Copy'; }, 5000);
}
