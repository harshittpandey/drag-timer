import { createHtmlElement } from "./shared.js";
import { PaletteBuilder } from "./types/PaletteBuilder.js";
class Palette {
    // shape: SHAPE
    constructor(hostElement, key, header, paletteType) {
        this.hostElement = hostElement;
        this.key = key;
        // this.header = header
        this.paletteType = paletteType;
        this.element = this.createPalette(header);
    }
    createPalette(header) {
        const palette = createHtmlElement('div', this.key, [this.key]);
        if (header !== '') {
            const headerEle = createHtmlElement('div', 'header', ['header'], header);
            palette.append(headerEle);
        }
        const itemsContainer = createHtmlElement('div', 'items-container', ['items-container']);
        palette.append(itemsContainer);
        this.hostElement.append(palette);
        return palette;
    }
    renderItems(items) {
        const container = this.element.querySelector('#items-container');
        items.forEach((item) => {
            const paletteItem = new PaletteBuilder(item.paletteType, item);
            container.append(paletteItem.htmlBuilder());
        });
    }
}
export { Palette };
