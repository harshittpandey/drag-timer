// constant methods
function createHtmlElement (type: string, id: string, classList: string[], content?: string): HTMLElement {
  const element = document.createElement(type)
  element.id = id
  classList.forEach(c => element.classList.add(c))
  element.innerHTML = content || ''
  return element
}

export { createHtmlElement }