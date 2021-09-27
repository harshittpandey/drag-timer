import { PALETTE_TYPE, createHtmlElement } from "../shared.js";
import { ShapeBuilder } from "./Shape.js";
import { StrokeBuilder } from "./Stroke.js";
import { ColorBuilder } from "./Color.js";
class PaletteBuilder {
    constructor(paletteType, builderObject) {
        this.paletteType = paletteType;
        if (paletteType === PALETTE_TYPE.Shape) {
            const shape = builderObject;
            const createdShape = new ShapeBuilder(shape.key, shape.name, shape.shape, shape.size, {});
            this.paletteInstance = createdShape;
        }
        else if (paletteType === PALETTE_TYPE.Stroke) {
            const stroke = builderObject;
            const createdStroke = new StrokeBuilder(stroke.type, stroke.color);
            this.paletteInstance = createdStroke;
        }
        else if (paletteType === PALETTE_TYPE.Color) {
            const color = builderObject;
            const createdColor = new ColorBuilder(color.name);
            this.paletteInstance = createdColor;
            // const el = this.createHtmlElement('div', '', [])
            // el.append(createdColor.htmlBuilder())
            // container.append(el)
        }
    }
    htmlBuilder() {
        if (this.paletteInstance) {
            if (this.paletteType === PALETTE_TYPE.Color) {
                const el = createHtmlElement('div', '', []);
                el.append(this.paletteInstance.htmlBuilder());
                return el;
            }
            return this.paletteInstance.htmlBuilder();
        }
        else {
            return createHtmlElement('div', '', []);
        }
    }
}
export { PaletteBuilder };
