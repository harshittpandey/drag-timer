import { PALETTE_TYPE } from "../palette/shared.js";
class ProjectState {
    constructor(canvas, palettes) {
        this.canvas = canvas;
        this.palettes = palettes;
    }
    getPaletteIndex(paletteType) {
        switch (paletteType) {
            case PALETTE_TYPE.Shape: return 0;
            case PALETTE_TYPE.Stroke: return 1;
            case PALETTE_TYPE.Color: return 2;
            default: return -1;
        }
    }
    getCanvas() {
        return this.canvas;
    }
    getPalette(paletteType) {
        const index = this.getPaletteIndex(paletteType);
        return this.palettes[index];
    }
    exportAllMethods() {
        return {
            getCanvas: this.getCanvas,
            getPalette: this.getPalette
        };
    }
}
export { ProjectState };
