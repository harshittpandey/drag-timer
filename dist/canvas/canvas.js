var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { STROKE_ENUM } from "../palette/shared.js";
import { autobind } from "../shared/decorators.js";
import { createHtmlElement } from "../shared/utils.js";
import { ShapeItemsObj } from "../palette/items/Shape.js";
import { defaultConfig } from "../palette/items/default.js";
class Canvas {
    constructor(hostElement, config, key) {
        this.hostElement = hostElement;
        this.key = key;
        this.shape = config.shape;
        this.stroke = config.stroke;
        this.color = config.color;
        this.bgColor = config.bgColor;
        this.element = this.renderCanvas();
        this.configure();
    }
    configure() {
        this.element.removeEventListener('dragover', this.dragOverHandler);
        this.element.removeEventListener('dragleave', this.dragLeaveHandler);
        this.element.removeEventListener('drop', this.dropHandler);
        // 
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
    }
    // private createHtmlElement(type: string = 'div', id: string, classList: string[], content?: string): HTMLElement {
    //   const element = document.createElement(type)
    //   element.id = id
    //   classList.forEach(c => element.classList.add(c))
    //   element.innerHTML = content || ''
    //   return element
    // }
    setStroke(element) {
        const strokeClasses = [];
        const type = this.stroke.type;
        switch (type) {
            case STROKE_ENUM.Thin: {
                strokeClasses.push('border-2');
                break;
            }
            case STROKE_ENUM.Medium: {
                strokeClasses.push('border-4');
                break;
            }
            case STROKE_ENUM.Dark: {
                strokeClasses.push('border-8');
                break;
            }
            case STROKE_ENUM.Custom: {
                strokeClasses.push(this.stroke.className || '');
                break;
            }
        }
        const color = this.color.name ? `border-${this.color.name}` : 'white';
        strokeClasses.push(color);
        element.classList.add(...strokeClasses);
    }
    setBackground(element) {
        const bgColor = (this.bgColor && !!this.bgColor.name) ? `bg-${this.bgColor.name}` : 'bg-transparent';
        element.classList.add(bgColor);
    }
    renderCanvas() {
        this.hostElement.innerHTML = '';
        const diagram = createHtmlElement('div', 'diagram', ['diagram']);
        const [width, height] = this.shape.size;
        const element = createHtmlElement('div', 'clock-in-canvas', [`shape-${this.shape.key}`, `width-${width}`, `height-${height}`]);
        diagram.append(element);
        this.hostElement.append(diagram);
        // stroke styles
        this.setStroke(element);
        // stroke styles:end
        // color 
        this.setBackground(element);
        // color : end
        return diagram;
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            this.element.classList.add('droppable');
        }
    }
    dropHandler(event) {
        const jsonStr = event.dataTransfer.getData('text/plain');
        const obj = JSON.parse(jsonStr);
        if (obj.hasOwnProperty('shape')) {
            const { key } = obj.shape;
            // todo: create a projectState class and save everything there
            this.shape = ShapeItemsObj[key] || {};
        }
        else if (obj.hasOwnProperty('stroke')) {
            this.stroke = obj.stroke;
        }
        else if (obj.hasOwnProperty('color')) {
            this.color = obj.color;
        }
        else if (obj.hasOwnProperty('bgColor')) {
            this.bgColor = obj.bgColor;
        }
        this.renderCanvas();
        this.element = this.renderCanvas();
        this.configure();
        // projectState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
    }
    dragLeaveHandler() {
        this.element.classList.remove('droppable');
        console.log('drag-leave-handler');
    }
}
__decorate([
    autobind
], Canvas.prototype, "dragOverHandler", null);
__decorate([
    autobind
], Canvas.prototype, "dropHandler", null);
__decorate([
    autobind
], Canvas.prototype, "dragLeaveHandler", null);
export { Canvas, defaultConfig };
