const SNIPPET_CLASS_FROM_KUBERNETES = 'language-shell';

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
    icon.className = 'btn-clipboard';
    return icon;
}

function copySnippetToClipboard() {
    var snippet = this.innerText.slice(0, -4).trim();
    navigator.clipboard.writeText(snippet);
}
