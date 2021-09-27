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
            // console.log('item.paletteType', item.paletteType)
            container.append(paletteItem.htmlBuilder());
            // new PaletteItem(item.paletteType, options)
            // if (item.paletteType === PALETTE_TYPE.Shape) {
            //   const shape: Shape = item
            //   const createdShape = new ShapeBuilder(
            //     shape.key,
            //     shape.name,
            //     shape.shape,
            //     shape.size,
            //     {...DEFAULT_SHAPE_RENDER}
            //   )
            //   container.append(
            //     createdShape.htmlBuilder()
            //   )
            // } else if (item.paletteType === PALETTE_TYPE.Stroke) {
            //   const stroke: Stroke = item
            //   const createdStroke = new StrokeBuilder(
            //     stroke.type,
            //     stroke.color
            //   )
            //   container.append(
            //     createdStroke.htmlBuilder()
            //   )
            // } else if (item.paletteType === PALETTE_TYPE.Color) {
            //   const name: string = item.name
            //   const createdColor = new ColorBuilder(name)
            //   const el = createHtmlElement('div', '', [])
            //   el.append(createdColor.htmlBuilder())
            //   container.append(el)
            // } 
        });
    }
}
export { Palette };
