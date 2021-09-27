// constant methods
function createHtmlElement(type, id, classList, content) {
    const element = document.createElement(type);
    element.id = id;
    classList.forEach(c => element.classList.add(c));
    element.innerHTML = content || '';
    return element;
}
export { createHtmlElement };
